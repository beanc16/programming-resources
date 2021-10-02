function Article(props)
{
    return(
        <div className="article">
            <a className="article-name" href={props.url}>
                {props.name}
            </a>
            <p className="article-description">
                {props.description}
            </p>
            <p className="article-author-name">
                By: {props.authorName}
            </p>
        </div>
    );
}