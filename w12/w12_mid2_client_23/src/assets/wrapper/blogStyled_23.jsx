import styled from 'styled-components'
const Wrapper=styled.div`
   

   .blogs {
  padding: 5rem 0;

  .section-title {
    h2 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }

    h3 {
      text-align: center;
      text-transform: capitalize;
      font-size: 1.2rem;
      margin-bottom: 1rem;
    }
  }
}

.blogs-center {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 1.5rem;
  /* max-width: 500px; */

  .blog {
    background-color: white;
    padding: 0.75rem;
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: 0.5s ease-in-out all;

    .img {
      width: 100%;
      height: 12rem;
      display: block;
      object-fit: cover;
    }

    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
    }
    &-img {
      border-radius: var(--border-radius);
      margin-bottom: 0.5rem;
    }
    &-content {
      padding-bottom: 1rem;

      span {
        text-transform: uppercase;
        color: var(--primary);
        letter-spacing: var(--letter-spacing);
        font-weight: 500;
      }

      h3 {
        text-transform: capitalize;
        letter-spacing: var(--letter-spacing);
        margin: 0.5rem 0;
      }

      p {
        color: var(--grey);
        margin-bottom: 0.5rem;
      }

      a {
        text-transform: capitalize;
        color: var(--primary-dark);
        letter-spacing: 1px;
      }
    }
  }
}

@media screen and (min-width: 450px) {
  .blogs-center {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .blogs-center {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 992px) {
  .blogs-center {
    grid-template-columns: repeat(4, 1fr);
  }
}

`
    
export default Wrapper