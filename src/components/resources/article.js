export default function Article(props)
{
    return(
        <div className="article">
            <a className="article-name" 
                href={props.url} 
                target="_blank" 
                rel="noopener noreferrer"
            >
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
