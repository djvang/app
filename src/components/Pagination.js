import React from 'react'

export class Pagination extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: Math.ceil(props.pagination.total / props.pagination.limit),
            current: props.pagination.page
        }

    }

    componentDidUpdate(prevProps) {
        if(prevProps.pagination.total !== this.props.pagination.total) {
            this.setState({
                pages: Math.ceil(this.props.pagination.total / this.props.pagination.limit)
            })
        }
    }

    handlerState(current) {

        this.setState({
            current: current
        }, () => {
            this.props.onClickPagination(current)
        })
    }

    
    handleClick(current, e) {
      e.preventDefault();
      
      this.handlerState(current)
    }
  
    handleClickPrev(current, e) {
      e.preventDefault();
  
      let page = 1 <= current ? current - 1 : false;
      if(page) this.handlerState(page);
    }
  
    handleClickNext(current, e) {
      e.preventDefault();
  
      let page = this.state.pages > current ? current + 1 : false;
      if(page) this.handlerState(page);
    }
    
    render() {

        let items = [];

        for (let i = 0; i < this.state.pages; i++) {
            items.push(<li 
                key={i} 
                className={i === this.state.current - 1 ? 'uk-active': ''}>
                    <a 
                        href={`/posts/page/${i}`} 
                        onClick={(e) => this.handleClick(i + 1, e)}>
                        {i + 1}
                    </a>
                </li>)
          }

        return <ul className="uk-pagination uk-flex-center" data-uk-margin>
            <li>
                <a href={`/posts/page/${this.state.current - 1}`} onClick={(e) => this.handleClickPrev(this.state.current, e)}>
                    <span data-uk-pagination-previous>
                    <svg
                    width={7}
                    height={12}
                    viewBox="0 0 7 12"
                    xmlns="http://www.w3.org/2000/svg"
                    ratio={1}
                    >
                    <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.2"
                        points="6 1 1 6 6 11"
                    />
                    </svg>
                </span>
                </a>
            </li>
            {items}
            <li>
                <a href={`/posts/page/${this.state.current + 1}`} onClick={(e) => this.handleClickNext(this.state.current, e)}>
                    <span data-uk-pagination-next>
                    <svg
                    width={7}
                    height={12}
                    viewBox="0 0 7 12"
                    xmlns="http://www.w3.org/2000/svg"
                    ratio={1}
                    >
                    <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1.2"
                        points="1 1 6 6 1 11"
                    />
                    </svg>
                </span>
                </a>
            </li>
        </ul>
    }


  }

  Pagination.defaultProps = {
    onClickPagination: () => {}
};

// export function Pagination(props) {
  
//   let items = [];
//   let total = 100;
//   let pages = Math.ceil(total / props.pagination.limit);

//   let handler = props.onClickPagination ? props.onClickPagination : (current) => {  console.log('The link was clicked.', current); }
  
//   function handleClick(current, e) {
//     e.preventDefault();
    
//     handler(current)
//   }

//   function handleClickPrev(current, e) {
//     e.preventDefault();

//     let page = 1 <= current ? current - 1 : false;
//     if(page) handler(page);
//   }

//   function handleClickNext(current, e) {
//     e.preventDefault();

//     let page = props.pages > current ? current + 1 : false;
//     if(page) handler(page);
//   }
  
//   for (let i = 0; i < pages; i++) {
//     items.push(<li 
//         key={i} 
//         className={i === props.pagination.page - 1 ? 'uk-active': ''}>
//             <a 
//                 href={`/posts/page/${i}`} 
//                 onClick={(e) => handleClick(i + 1, e)}>
//                 {i + 1}
//             </a>
//         </li>)
//   }
  
//   return <ul className="uk-pagination uk-flex-center" data-uk-margin>
//     <li>
//         <a href={`/posts/page/${props.pagination.page - 1}`} onClick={(e) => handleClickPrev(props.pagination.page, e)}>
//             <span data-uk-pagination-previous>
//             <svg
//             width={7}
//             height={12}
//             viewBox="0 0 7 12"
//             xmlns="http://www.w3.org/2000/svg"
//             ratio={1}
//             >
//             <polyline
//                 fill="none"
//                 stroke="#000"
//                 strokeWidth="1.2"
//                 points="6 1 1 6 6 11"
//             />
//             </svg>
//         </span>
//         </a>
//     </li>
//     {items}
//     <li>
//         <a href={`/posts/page/${props.pagination.page + 1}`} onClick={(e) => handleClickNext(props.pagination.page, e)}>
//             <span data-uk-pagination-next>
//             <svg
//             width={7}
//             height={12}
//             viewBox="0 0 7 12"
//             xmlns="http://www.w3.org/2000/svg"
//             ratio={1}
//             >
//             <polyline
//                 fill="none"
//                 stroke="#000"
//                 strokeWidth="1.2"
//                 points="1 1 6 6 1 11"
//             />
//             </svg>
//         </span>
//         </a>
//     </li>
// </ul>
// }