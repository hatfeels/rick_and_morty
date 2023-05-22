import Card from './card/Card';
import styles from './cards.module.css'

const Cards = ({characters, onClose}) => {
   return (
      <div className={styles.contenedor}>
         {
            characters.map(({id, name, species, gender, image, origin, status})=> {
               return (
                  <Card
                  key={id}
                  id={id}
                  name={name}
                  status={status}
                  species={species}
                  gender={gender}
                  origin={origin.name}
                  image={image}
                  onClose ={onClose}
                  />
               )
            })
         }
      </div>
   );
}


export default Cards;
