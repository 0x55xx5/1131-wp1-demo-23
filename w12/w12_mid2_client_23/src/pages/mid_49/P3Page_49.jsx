import { useState, useEffect } from 'react';
import MenuItem_49 from '../../components/mid_49/MenuItem_49';

import { supabase } from '../../db/clientSupabase';

const P3Page_49 = () => {
  const [menu, setMenu] = useState([]);
  const fetchMenuFromSupabase = async () => {
    try {
      let { data, error } = await supabase.from('menu_49').select('*');
      console.log('supabase menu', data);
      setMenu(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMenuFromSupabase();
  }, []);

  return (
    <>
      <section className='menu-demo'>
        <div className='section-center'>
          <section className='menu'>
            <div class='title'>
            <h2>Midterm_49: kkk, 912410023</h2>
              <div class='underline'></div>
            </div>
            <div className='btn-container'>
              <button type='button' className='filter-btn' data-id='all'>
                all
              </button>
              <button type='button' className='filter-btn' data-id='breakfast'>
                breakfast
              </button>
              <button type='button' className='filter-btn' data-id='lunch'>
                lunch
              </button>
              <button type='button' className='filter-btn' data-id='dessert'>
                dessert
              </button>
              <button type='button' className='filter-btn' data-id='shakes'>
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
    </>
  );
};
export default P3Page_49;
