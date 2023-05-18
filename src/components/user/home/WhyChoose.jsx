import React from 'react'
import whyChoose from "../../../assets/whychoose.png"

const WhyChoose = () => {
  return (
    <section className='h-auto my-10 bg-dreamLabColor2 bg-opacity-10'>
        <div className='flex mx-5 md:mx-20 py-10'> 
            <div className='hidden md:block md:basis-1/3'>
                <img className='md:h-full md:w-full' src={whyChoose} alt="photo for why should you choose dream lab" />
            </div>
            <div className='md:basis-2/3 basis-[100%] md:ml-20'>
                <h3 className='text-center md:text-left md:text-2xl text-xl font-semibold mb-10'>Why Choose Dream Lab</h3>
                
                    <ul className='list-disc font-thin text-xs sm:text-lg md:text-xl text-left'>
                        <li className='mb-10'>Dreamlab ဆိုတာကတော့ ကမ္ဘာကျော် personal,professional and business development စာအုပ်တွေကို "မြန်မာလို" ဖတ်ရှုနိုင်အောင်အနှစ်ချုပ်ထားသည့် website တစ်ခုဖြစ်ပါတယ်။</li>
                        <li className='mb-10'>နေ့စဥ် ကမ္ဘာကျော်စာအုပ်များကို မြန်မာလိုအဆီအနှစ်ထုတ် အနှစ်ချုပ်ရေးပေးထားပါတယ်။</li>
                        <li className='mb-10'>ဖုန်းနဲ့အင်တာနက်ရှိရင် စာအုပ်တွေသယ်သွားစရာမလိုတော့ဘူးပေါ့။</li>
                        <li className='mb-10'>1st june 2020 ကစတင်ခဲ့ပါတယ်။တစ်ရက်တစ်အုပ်စာအုပ်တွေအပြင် နေ့စဥ်တင်ပေးနေတဲ့စာအုပ်အသစ်တွေကိုလဲ ဖတ်ရှုနိုင်မှာဖြစ်ပါတယ်။ဒါကြောင့်နေ့စဥ်ကိုယ့်ရဲ့ ဦးနှောက်မှာရင်းနှီးမြှုပ်နှံဖို့ အခုဘဲ Dreamlab ကို subscribe လုပ်လိုက်ပါနော်။</li>
                    </ul>
              
            </div>
        </div>
    </section>
  )
}

export default WhyChoose