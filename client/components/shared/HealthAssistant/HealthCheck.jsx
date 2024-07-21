"use client";

/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import Image from "next/image";
import {healthLogo} from "../../../public/images";

const calculateMetrics = (inputs) => {
    const {height, weight, age, gender, heartRateRest, activityLevel} = inputs;

    const heightInMeters = height / 100;
    const weightInKg = weight;
    const heightInInches = height * 0.393701;

    const bmi = (weightInKg / heightInMeters ** 2).toFixed(2);
    const bmr =
        gender === "male"
            ? 10 * weightInKg + 6.25 * height - 5 * age + 5
            : 10 * weightInKg + 6.25 * height - 5 * age - 161;

    const activityFactors = {
        sedentary: 1.2,
        lightly: 1.375,
        moderately: 1.55,
        very: 1.725,
        extra: 1.9,
    };
    const tdee = (bmr * (activityFactors[activityLevel] || 1.2)).toFixed(2);

    const bfp =
        gender === "male"
            ? 1.2 * bmi + 0.23 * age - 16.2
            : 1.2 * bmi + 0.23 * age - 5.4;

    const ibw =
        gender === "male"
            ? 50 + 2.3 * (heightInInches - 60)
            : 45.5 + 2.3 * (heightInInches - 60);

    const ffmi = (
        (weightInKg - weightInKg * (bfp / 100)) /
        heightInMeters ** 2
    ).toFixed(2);
    const dwi = (30 * weightInKg).toFixed(2);
    const maxHeartRate = 220 - age;
    const thrr = ((maxHeartRate - heartRateRest) * 0.7 + heartRateRest).toFixed(
        2
    );

    return {
        bmi,
        bmr: bmr.toFixed(2),
        tdee,
        bfp: bfp.toFixed(2),
        ibw: ibw.toFixed(2),
        ffmi,
        dwi,
        thrr,
    };
};

const checkNormalRange = (metric, value, gender, age) => {
    const ranges = {
        bmi: {min: 18.5, max: 24.9},
        bfp: gender === "male" ? {min: 6, max: 24} : {min: 14, max: 31},
        thrr: {min: 50, max: 85},
        dwi: {min: 2000, max: 3000},
        ffmi: {min: 16, max: 20},
        ibw: {
            min: gender === "male" ? 50 : 45.5,
            max: gender === "male" ? 90 : 77,
        },
        bmr: {min: 1200, max: 2500},
        tdee: {min: 1800, max: 3000},
    };

    const normalRange = ranges[metric];
    const isNormal = value >= normalRange.min && value <= normalRange.max;

    return {
        color: isNormal ? "text-green-500" : "text-red-500",
        normalRange: `${normalRange.min} - ${normalRange.max}`,
    };
};

const recommendations = {
    bmi: {
        high: "Consider incorporating regular exercise and a balanced diet rich in vegetables, fruits, and lean proteins. Consulting a nutritionist or a fitness coach might be helpful.",
        low: "Focus on a diet rich in healthy calories, including whole grains, lean proteins, and healthy fats. A consultation with a healthcare professional can provide personalized advice.",
    },
    bmr: {
        high: "If your BMR is high, ensure you are not overcompensating with excessive calorie intake. Maintaining a balanced diet and regular physical activity is essential.",
        low: "A low BMR might indicate a need for more calories or thyroid-related issues. Consider speaking with a healthcare professional to adjust your diet or investigate potential underlying conditions.",
    },
    tdee: {
        high: "For a high TDEE, ensure your calorie intake is balanced with your activity level to avoid unintended weight loss or other health issues.",
        low: "A low TDEE might suggest insufficient activity or a potential health issue. Increasing physical activity and evaluating your diet could be beneficial.",
    },
    bfp: {
        high: "High body fat percentage can be managed with regular physical activity and a diet focused on reducing fat intake and increasing lean protein.",
        low: "A low body fat percentage might require increasing calorie intake with nutrient-dense foods to ensure overall health.",
    },
    ibw: {
        high: "If your ideal body weight is high, it may be helpful to focus on a balanced diet and regular exercise to achieve a healthier weight range.",
        low: "If your ideal body weight is low, consider increasing calorie intake with nutrient-dense foods and incorporating strength training exercises.",
    },
    ffmi: {
        high: "A high FFMI might indicate a high muscle mass. Ensure that your diet supports overall health and consult with a fitness expert if necessary.",
        low: "A low FFMI might suggest a need for strength training and increased protein intake to support muscle growth.",
    },
    dwi: {
        high: "Ensure that high daily water intake is balanced and appropriate for your activity level. Excessive water intake can have its own risks.",
        low: "Increase your water intake to maintain hydration, especially if you are active or live in a hot climate.",
    },
    thrr: {
        high: "High target heart rate ranges are suitable for intense workouts. Ensure you are not overtraining and balance with appropriate recovery periods.",
        low: "Low target heart rate ranges may indicate a need for increased exercise intensity to achieve fitness goals.",
    },
};

const getRecommendation = (metric, value, gender, age) => {
    const {color} = checkNormalRange(metric, value, gender, age);
    return color === "text-green-500"
        ? "Your value is within the normal range."
        : recommendations[metric][color === "text-green-500" ? "low" : "high"];
};

function HealthCheck() {
    const [inputs, setInputs] = useState({
        height: 170,
        weight: 70,
        age: 25,
        gender: "male",
        heartRateRest: 70,
        activityLevel: "sedentary",
    });

    const [metrics, setMetrics] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs((prevInputs) => ({...prevInputs, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const calculatedMetrics = calculateMetrics(inputs);
        setMetrics(calculatedMetrics);
    };

    const metricFullForms = {
        bmi: "Body Mass Index",
        bmr: "Basal Metabolic Rate",
        tdee: "Total Daily Energy Expenditure",
        bfp: "Body Fat Percentage",
        ibw: "Ideal Body Weight",
        ffmi: "Fat-Free Mass Index",
        dwi: "Daily Water Intake",
        thrr: "Target Heart Rate Range",
    };

    return (
        <div className="container mx-auto my-200px flex h-auto flex-col lg:flex-row ">
            <div className="left w-full lg:w-1/2 bg-white flex flex-col justify-center p-8">
                <div className="header mb-8">
                    <h2 className="text-4xl font-bold text-green-600">
                        <div
                            className="inline-block lg:hidden"
                            style={{
                                background: "url('./public/healthLogo.png'),transparent",
                                backgroundSize: "contain",
                                backgroundRepeat: "no-repeat",
                                height: "60px",
                                width: "60px",
                                position: "relative",
                                top: "15px",
                            }}
                        ></div>
                        Health Assistant
                    </h2>
                    <h4 className="text-lg text-gray-600 mt-2">
                        Fill the form to get the results
                    </h4>
                </div>
                <form className="form space-y-4 text-gray-700" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="text-gray-700">Height (cm)</span>
                        <input
                            type="number"
                            name="height"
                            value={inputs.height}
                            onChange={handleChange}
                            className="form-field w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Height (cm)"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Weight (kg)</span>
                        <input
                            type="number"
                            name="weight"
                            value={inputs.weight}
                            onChange={handleChange}
                            className="form-field w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Weight (kg)"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Age</span>
                        <input
                            type="number"
                            name="age"
                            value={inputs.age}
                            onChange={handleChange}
                            className="form-field w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Age"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Gender</span>
                        <select
                            name="gender"
                            value={inputs.gender}
                            onChange={handleChange}
                            className="form-field w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Heart Rate (resting)</span>
                        <input
                            type="number"
                            name="heartRateRest"
                            value={inputs.heartRateRest}
                            onChange={handleChange}
                            className="form-field w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                            placeholder="Heart Rate (resting)"
                        />
                    </label>
                    <label className="block">
                        <span className="text-gray-700">Activity Level</span>
                        <select
                            name="activityLevel"
                            value={inputs.activityLevel}
                            onChange={handleChange}
                            className="form-field w-full px-4 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        >
                            <option value="sedentary">Sedentary</option>
                            <option value="lightly">Lightly Active</option>
                            <option value="moderately">Moderately Active</option>
                            <option value="very">Very Active</option>
                            <option value="extra">Extra Active</option>
                        </select>
                    </label>
                    <button
                        type="submit"
                        className={`w-full bg-gradient-to-r from-green-400 via-green-600 to-green-950 text-white font-bold py-2 rounded-md border border-transparent`}
                    >
                        Calculate
                    </button>
                </form>
            </div>
            <div className="right w-full lg:w-1/2 bg-white flex flex-col justify-center p-8">
                {metrics ? (
                    <div className="metrics p-4 relative">
                        <h2 className="text-xl font-bold mb-4">Calculated Metrics</h2>
                        {Object.keys(metrics).map((metric) => {
                            const {color, normalRange} = checkNormalRange(
                                metric,
                                metrics[metric],
                                inputs.gender,
                                inputs.age
                            );
                            return (
                                <div
                                    key={metric}
                                    className="mb-4 lg:mb-3 flex items-center group border-2 rounded p-2 px-4"
                                >
                                    <div className="flex-grow">
                                        <strong className="capitalize text-gray-700">{metric}:</strong>{" "}
                                        <span className={color}>{metrics[metric]}</span>{" "}
                                        <small>(Normal Range: {normalRange})</small>
                                        <p className="mt-2 text-sm text-gray-600">
                                            {getRecommendation(
                                                metric,
                                                metrics[metric],
                                                inputs.gender,
                                                inputs.age
                                            )}
                                        </p>
                                    </div>
                                    <span className="relative ml-4">
                    <span className="text-gray-500 cursor-pointer">ⓘ</span>
                    <span
                        className="absolute right-0 top-full transform -translate-y-2 p-2 text-xs bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {metricFullForms[metric]}
                    </span>
                  </span>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div
                        className="right md:w-1/2 bg-cover bg-center hidden lg:block	 self-center">
                        <Image src={healthLogo} alt="Health Assistant" width={600} height={400}/>
                    </div>
                )}
            </div>
        </div>
    );
}

export default HealthCheck;
