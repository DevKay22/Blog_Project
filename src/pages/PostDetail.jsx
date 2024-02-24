import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from '../components/PostAuthor';
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
   <section className='post-detail'>
    <div className="container post-detail__container">
      <div className="post-detail__header">
        <PostAuthor />

        <div className="post-detail__buttons">
          <Link to={`/posts/wrwe/edit`} className='btn sm primary'>Edit</Link>
          <Link to={`/posts/wrwe/delete`} className='btn sm danger'>Delete</Link>
        </div>
      </div>
      <h1>This is the post title</h1>
      <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
      </div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Blanditiis magnam facilis perferendis! Officia corporis est eos atque magni, 
        quam veniam in eligendi quasi nulla possimus? Facere molestias atque maiores nostrum.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati repudiandae, 
        facere nulla expedita sunt voluptates quod atque omnis magnam. Iusto, illo nobis cum, adipisci odit 
        ullam laborum aspernatur eaque, explicabo exercitationem velit autem a accusamus soluta. Iusto, 
        labore velit animi nisi delectus veritatis est, assumenda sit modi voluptas ducimus ratione quaerat 
        magni laudantium, neque veniam eos commodi sequi ipsam fuga tempore adipisci. Ex ipsam nihil rem neque 
        dolore provident suscipit aut placeat possimus, beatae eaque optio, labore eos totam non 
        facere mollitia cumque maiores dolores voluptatibus eius quis minus cupiditate.
         Eligendi sit aut beatae officia veritatis obcaecati molestiae dolores!
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati repudiandae, 
        facere nulla expedita sunt voluptates quod atque omnis magnam. Iusto, illo nobis cum, adipisci odit 
        ullam laborum aspernatur eaque, explicabo exercitationem velit autem a accusamus soluta. Iusto, 
        labore velit animi nisi delectus veritatis est, assumenda sit modi voluptas ducimus ratione quaerat 
        magni laudantium, neque veniam eos commodi sequi ipsam fuga tempore adipisci. Ex ipsam nihil rem neque 
        dolore provident suscipit aut placeat possimus, beatae eaque optio, labore eos totam non 
        facere mollitia cumque maiores dolores voluptatibus eius quis minus cupiditate.
         Eligendi sit aut beatae officia veritatis obcaecati molestiae dolores!
      </p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque, facilis.</p>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque obcaecati repudiandae, 
        facere nulla expedita sunt voluptates quod atque omnis magnam. Iusto, illo nobis cum, adipisci odit 
        ullam laborum aspernatur eaque, explicabo exercitationem velit autem a accusamus soluta. Iusto, 
        labore velit animi nisi delectus veritatis est, assumenda sit modi voluptas ducimus ratione quaerat 
        magni laudantium, neque veniam eos commodi sequi ipsam fuga tempore adipisci. Ex ipsam nihil rem neque 
        dolore provident suscipit aut placeat possimus, beatae eaque optio, labore eos totam non 
        facere mollitia cumque maiores dolores voluptatibus eius quis minus cupiditate.
         Eligendi sit aut beatae officia veritatis obcaecati molestiae dolores!
      </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum accusantium commodi culpa 
        quas nemo voluptate nostrum provident
         nesciunt, voluptas rem sunt. Ab sed blanditiis laborum veniam vel non illo beatae?</p>
    </div>
   </section>
  )
}

export default PostDetail