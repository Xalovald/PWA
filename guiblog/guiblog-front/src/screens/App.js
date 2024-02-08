import React, { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/posts');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const currentDateTime = new Date(); // Get current date and time
      const formattedDate = currentDateTime.toISOString(); // Convert to ISO string format

      const response = await fetch('http://localhost:8000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          content: formData.content,
          created_at: formattedDate, // Include the current date and time in your data
        }),
        });

  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // After successfully posting, fetch the updated data
      fetchData();

      // Reset the form
    setFormData({
      title: '',
      content: '',
    });
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <div>
      <h1>Bienvenue sur le GuiBlog</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="title" placeholder='Titre' value={formData.title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          <textarea name="content" placeholder='Contenu' value={formData.content} onChange={handleInputChange} />
        </label>
        <br />
      <button type="submit">Submit</button>
    </form>

      <ul>
        {data.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> - {post.created_at}
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
