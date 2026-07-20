// import { useState } from 'react';
// import styles from './ContactModal.module.scss';

// const ContactModal = ({ isOpen, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     setFormData({
//       name: '',
//       email: '',
//       message: '',
//     });
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className={styles.modal}>
//       <div className={styles.modal__content}>
//         <span className={styles.close} onClick={onClose}>
//           &times;
//         </span>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Name:
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               placeholder="John Dou"
//             />
//           </label>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               placeholder="example@email.com"
//             />
//           </label>
//           <label>
//             Message:
//             <textarea
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//               placeholder="Your message"
//             />
//           </label>
//           <button type="submit">
//             <span className={styles.button__ellipse_left}></span>
//             Send
//             <span className={styles.button__ellipse_right}></span>
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactModal;
