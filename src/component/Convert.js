import { useState } from "react"
import { useForm } from 'react-hook-form'


const Convert = () => {

    const [length,setLength] = useState('')
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
             <p>Input Bangla/English Numbers</p>
             

                <form onSubmit={handleSubmit(onSubmit)}>

                    
                    <div className="form-input">
                    <input 
                        className="banglaInput" 
                        type="text"
                        value={length} 
                        {...register("length", 
                            { 
                            onChange: (e)=>
                            {
                            setLength(e.target.value);
                            setActualInput(convertBanglaToEnglish(e.target.value))
                            },
                            
                            required: true, max: 50, min: 20,
                            pattern: /[0-9০১২৩৪৫৬৭৮৯]+/i

                            })
                        }
                    />
                  <div>
                    {errors.length && errors.length.type === "required" && (<span className="error" >অনুগ্রহ করে দৈর্ঘ্য টাইপ করুন*</span>)}
                    {errors.length && errors.length.type === "max" && ( <span  className="error" >Max length exceeded</span>)}
                    {errors.length && errors.length.type === "min" && ( <span  className="error" >min length receded</span>)}
                    {errors.length && errors.length.type === "pattern" && ( <span className="error" >অনুগ্রহ করে শুধুমাত্র সংখ্যা ইনপুট করুন*</span>)}
                  </div>
                    
                    </div>

                    <button type="submit" onClick={handleInputValues}>submit</button>
                </form>

                <small>check console for outputs</small>
    
             </>
            )
}
export default Convert