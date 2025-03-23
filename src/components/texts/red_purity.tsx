import "./texts.scss"
import * as motion from "motion/react-client"

export default function RedPurity() {
    return <div className='red-purity'>
        <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: .5, duration: 1.5, type: "spring", bounce: 0.25 }}
        >
            Red Purity
        </motion.span>
    </div>
}