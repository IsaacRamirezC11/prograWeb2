document.getElementById('whatsappForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir recarga
  
    const numero = document.getElementById('numero').value.trim();
    const mensaje = encodeURIComponent(document.getElementById('mensaje').value.trim());
  
    if (numero === '' || mensaje === '') {
      alert('Por favor llena ambos campos.');
      return;
    }
  
    // Crear URL para redireccionar a la API de WhatsApp
    const url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`;
    window.open(url, '_blank');
  });
  