import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt={`monster${props.monster.id}`} />
        <h1>{ props.monster.name }</h1>
        <p>{ props.monster.email }</p>
    </div>
);