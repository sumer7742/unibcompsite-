
import emailjs from "emailjs-com";

export default function Apply() {
  
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     

      await emailjs.sendForm(
        
      );

      alert("Application submitted successfully ✅");
        e.target.reset();
     
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to submit application ❌");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Apply for a Job</h2>
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        
        <input
          type="text"
          name="fullName"
         
          placeholder="Full Name"
          className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-300 transition"
          required
        />

        <input
          type="email"
          name="email"
         
          placeholder="Email"
          className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-300 transition"
          required
        />

        <input
          type="tel"
          name="phone"
        
          placeholder="Phone Number"
          className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-300 transition"
          required
        />

        <select
          name="position"
         
         
          className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-300 transition"
          required
        >
          <option value="">Select Position</option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="bd">Business Development Executive</option>
        </select>

        {/* <label className="block">
          <span className="text-gray-700 dark:text-gray-200">Resume (PDF)</span>
          <input
            type="file"
            name="resume"
            accept=".pdf,.doc,.docx"
           
            className="w-full mt-2"
            required
          />
        </label> */}
        <input
  type="url"
  name="resume"
  placeholder="Link to your resume (Google Drive / Dropbox)"
  className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-300 transition"
/>


        <textarea
          name="coverLetter"
         
          
          placeholder="Cover Letter / Message"
          rows="5"
          className="w-full p-4 rounded-xl border border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-300 transition"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-orange-600 text-black font-semibold py-4 rounded-full hover:bg-orange-500 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}
