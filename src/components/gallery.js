function Gallery(props) {
    return (
        <div className="image">
            <img src={props.image} alt="dog" />
            <p>{props.title}</p>
        </div>
    );
}
export default Gallery;