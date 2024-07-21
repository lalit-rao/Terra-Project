import styles from "./Team.module.css";
import SocialIcons from "./SocialIcon";
import Image from "next/image";
import {lalit, vivek, vranda} from "@/public/images";

const lalitRaoData = {
  GitHub: "https://github.com/lalit-rao",
  LinkedIn: "https://www.linkedin.com/in/lalit-rao-7b7aba250/",
  Instagram: " https://www.instagram.com/lalit_rao?igsh=MTkwdXp4a3d3NjYyYQ==",
};

const vrandGargData = {
  GitHub: "https://github.com/VrandaaGarg",
  LinkedIn: "https://www.linkedin.com/in/vranda-garg-b68011293/",
  Instagram: " https://www.instagram.com/vranda_garg/ ",
};

const vivekKumarGargData = {
  GitHub: "https://github.com/viv2005ek",
  LinkedIn: "https://www.linkedin.com/in/vivek-kumar-garg-097677280/",
  Instagram: "https://www.instagram.com/viv2005ek?igsh=MWhmbThkM3c0bG4xdw== ",
};

function Team() {
  return (
    <div className={styles.TeamBody}>
      <h1 className={styles.mainHeading}>Our Team</h1>
      <div className={styles.memberCards}>
        <div className={styles.memberCard}>
          <Image src={lalit} alt="" />
          <p className="text-xl font-semibold">Lalit Rao</p>
          <p>3rd Year</p>
          <p>Manipal University Jaipur</p>
          <p className="text-sm">Team-Role: Leader</p>
          <SocialIcons data={lalitRaoData} />
        </div>
        <div className={styles.memberCard}>
          <Image src={vivek} alt="" />
          <p className="text-xl font-semibold">Vivek Kumar Garg</p>
          <p>2nd Year</p>
          <p>Manipal University Jaipur</p>

          <p className="text-sm">Team-Role: Frontend Developer</p>
          <SocialIcons data={vivekKumarGargData} />
        </div>
        <div className={styles.memberCard}>
          <Image src={vranda} alt="" />
          <p className="text-xl font-semibold">Vranda Garg</p>
          <p>2nd Year</p>
          <p>Manipal University Jaipur</p>

          <p className="text-sm">Team-Role: Frontend Developer</p>
          <SocialIcons data={vrandGargData} />
        </div>
      </div>
    </div>
  );
}
export default Team;
