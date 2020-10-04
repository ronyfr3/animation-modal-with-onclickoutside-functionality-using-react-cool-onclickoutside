import React,{useState,useEffect} from "react";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {motion,AnimatePresence} from "framer-motion"
import useOnclickOutside from 'react-cool-onclickoutside'
import './Moodal.css'

const backdrop = {
    visible:{opacity: 1},
    hidden:{opacity: 0}
}
const modal={
    hidden:{y:'-100vh',opacity:0},
    visible:{y:'200px',opacity:1,transition:{delay:0.5}}
}
function Moodal() {
    const [showModal,setShowModal] = useState(false)

      const onCloseModal = () => {
        setShowModal(false);
      };
 
    useEffect(()=>{
        setTimeout(()=>setShowModal(true),3000)
    },[setShowModal])
    const ref = useOnclickOutside(()=>{
        onCloseModal();
    })

    return (
        <AnimatePresence exitBeforeEnter>
       
            {
                showModal && (
                    <motion.div className="backdrop"
                       variants={backdrop}
                       initial='hidden'
                       animate='visible'
                       exit='hidden'>
                        <motion.div className="modal"
                        variants={modal}
                        onClose={onCloseModal}
                        ref={ref}
                        >
                         <span className='closeIcon' onClick={()=>setShowModal(false)}><HighlightOffIcon/></span>
                         <h2>Simple centered modal</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                    hendrerit risus, sed porttitor quam.
                                </p>
                        </motion.div>
                    </motion.div>
        
                )
            }
        </AnimatePresence>
    )
}
export default Moodal

