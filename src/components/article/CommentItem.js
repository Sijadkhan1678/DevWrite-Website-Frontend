import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { unComment } from '../../actions/articleActions';


const CommentItem = ({articleId,comment,unComment,auth})  => {
  const {_id,text,commentby,commentAt} = comment

  
  
   unComment(_id,articleId)


  return(
    <Fragment>
         <Link > 
              <div className="col s12 m9 l10">
                <div className="card">
                  <div class="card-image">
                    <img src={commentby.photo} className="responsive-img round-img" />
                    <span className='block'> {commentby.name} </span>
                    <span>{new Date(commentAt).toDateString()} </span>
                  </div>
                  
                  <div class="card-content">
                      
                <p>{text}</p>
                  </div>
                  <div className='card-action'>
      {auth.user_id === commentby._id && (
    <i onClick={ unComment(_id,articleId)} className='material-icons red-text'>delete</i>
      )}
                                  
                 </div>
                 </div>
                 </div>
                 </Link>
    </Fragment>
    )
  
}

CommentItem.propTypes = {
  articleId: propTypes.string.isRequired,
  comment: propTypes.object.isRequired,
  auth: propTypes.object.isRequired,
  unComment: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  
});


export default connect(mapStateToProps, { unComment })(CommentItem);
