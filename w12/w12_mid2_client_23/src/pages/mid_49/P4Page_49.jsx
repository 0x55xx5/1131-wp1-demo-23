import { useState, useEffect } from 'react';
import MenuItem_49 from '../../components/mid_49/MenuItem_49';

import { supabase } from '../../db/clientSupabase';

import Wrapper from '../../assets/wrapper/menu_23';

const P4Page_49 = () => {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState('')

  const fetchMenuByCategoryFromSupabase = async () => {
    try {
      if(category === ''){
        let { data, error } = await supabase.from('menu_49').select('*')
        console.log(`supabase menu ${category}`, data);
        setMenu(data);
      } else {
        let { data, error } = await supabase.from('menu_49').select('*').eq('category', category)
        console.log(`supabase menu ${category}`, data);
        setMenu(data);
      }

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuByCategoryFromSupabase();
  }, [category]);

const changeMenuFilter = (category) => {
  setCategory(category)
}


  return (
    <>
      <Wrapper>
        <section className='menu-demo'>
          <div className='section-center'>
            <section className='menu'>
              <div class='title'>
                <h2>Fetch Supabase By Category: KKK, 912410023</h2>
                <div class='underline'></div>
              </div>
              <div className='btn-container'>
                <button type='button' className='filter-btn' data-id='all' onClick={()=>changeMenuFilter('')}>
                  all
                </button>
                <button type='button' className='filter-btn' data-id='breakfast' onClick={()=>changeMenuFilter('breakfast')}>
                  breakfast
                </button>
                <button type='button' className='filter-btn' data-id='lunch' onClick={()=>changeMenuFilter('lunch')}>
                  lunch
                </button>
                <button type='button' className='filter-btn' data-id='dessert' onClick={()=>changeMenuFilter('dessert')}>
                  dessert
                </button>
                <button type='button' className='filter-btn' data-id='shakes' onClick={()=>changeMenuFilter('shakes')}>
                  shakes
                </button>
              </div>
              <div className='section-center'>
                {menu?.map((item) => {
                  const { id, img, title, price, category, descrip } = item;
                  return (
                    <MenuItem_49
                      key={id}
                      id={id}
                      img={img}
                      title={title}
                      category={category}
                      price={price}
                      descrip={descrip}
                    />
                  );
                })}
              </div>
            </section>
          </div>
        </section>
      </Wrapper>
    </>
  );
};
export default P4Page_49;
