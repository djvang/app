import React from 'react'

export function Comments({comments}) {
  return <div>
    <hr />
    <h3 className="uk-margin-remove-top">Comments:</h3>
    <div className="uk-comments">
        {comments.map(comment => {
            return <div key={comment.id}>
                <article className="uk-comment">
                    <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
                        <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="/">{comment.name}</a></h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a href="/">{comment.email}</a></li>
                        </ul>
                        </div>
                    </header>
                    <div className="uk-comment-body">
                        {comment.body}
                    </div>
                </article>
                <hr />
            </div>
        })}
    </div>
  </div>
}