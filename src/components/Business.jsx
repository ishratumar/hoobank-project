import { features } from "../constants";
import styles, { layout} from "../style";
import Button from './Button';

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden" /> we'll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum enim optio nesciunt illo eius quod consequatur aliquid deserunt cupiditate repellendus quaerat molestias, vitae debitis perspiciatis iusto itaque praesentium dolores?</p>
        <Button styles="mt-10" />
      </div>
      
    </section>
  )
}

export default Business
