import { useState } from "react"
import { useForm } from 'react-hook-form'


const Convert = () => {

    const [firstInput,setFirstInput] = useState('')
    const [actualInput,setActualInput] = useState('')
    const { register,handleSubmit,setValue,  formState: { errors } } = useForm();
    
    function convertBanglaToEnglish(input) {
        const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
        const englishDigits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
    
        let englishNumber = '';
        for (let i = 0; i < input.length; i++) {
          const digit = input.charAt(i);
          const index = bengaliDigits.indexOf(digit);
          if (index !== -1) {
            englishNumber += englishDigits[index];
          } else {
            englishNumber += digit;
          }
        }
        englishNumber = parseFloat(englishNumber)
    
        if(!isNaN(englishNumber)){
            const value = englishNumber
            return value
        }
      }

      const onSubmit = (data) =>{
        console.log(data);
        
      }

      const handleInputValues = () => {
        setValue("length", actualInput)
      }
 

    return ( 
             <>
                <div>Convert</div>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <p>Shei Form</p>
                    <div className="form-input">
                    <input 
                        className="banglaInput" 
                        type="text"
                        value={firstInput} 
                        {...register("length", { onChange: (e)=>{
                            setFirstInput(e.target.value);
                            setActualInput(convertBanglaToEnglish(e.target.value))
                        }, required: true, max: 50, min: 20})}
                    />
                  
                    {errors.length && <span className="text-danger fw-bold m-1" >অনুগ্রহ করে সঠিক দৈর্ঘ্য টাইপ করুন*</span>}
                    </div>

                    <button type="submit" onClick={handleInputValues}>submit</button>
                </form>
    
             </>
            )
}
export default Convert