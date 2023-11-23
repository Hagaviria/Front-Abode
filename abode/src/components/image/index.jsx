import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDropzone } from 'react-dropzone';

const ImageUploadForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Puedes manejar la lógica de la imagen aquí
    const selectedImage = acceptedFiles[0];
    setImage(selectedImage);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crea un objeto FormData para enviar los datos y la imagen al servidor
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', image);

    try {
      // Envia la solicitud al servidor
      const response = await fetch("https://localhost:7282/api/images", {
        method: 'POST',
        body: formData,
      });
      

      if (response.ok) {
        // Maneja la respuesta del servidor (puede ser una confirmación de éxito, etc.)
        console.log('Imagen subida exitosamente');
      } else {
        // Maneja el caso en que la respuesta no sea exitosa
        console.error('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error de red al subir la imagen', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
      />
      <TextField
        label="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
      />
      <div {...getRootProps()} style={{ marginTop: '20px', border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Arrastra y suelta una imagen aquí, o haz clic para seleccionar una.</p>
      </div>
      <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Subir
      </Button>
    </form>
  );
};

export default ImageUploadForm;
