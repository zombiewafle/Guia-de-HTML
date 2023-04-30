const container = document.getElementById('container');

// Crear el formulario
const form = document.createElement('form');
form.id = 'myForm';

// Crear el campo de nombre
const nameLabel = document.createElement('label');
nameLabel.textContent = 'Nombre:';
const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.name = 'name';
form.appendChild(nameLabel);
form.appendChild(nameInput);

// Crear el campo de correo electrónico
const emailLabel = document.createElement('label');
emailLabel.textContent = 'Correo electrónico:';
const emailInput = document.createElement('input');
emailInput.type = 'email';
emailInput.id = 'email';
emailInput.name = 'email';
form.appendChild(emailLabel);
form.appendChild(emailInput);

let br = document.createElement("br");
form.appendChild(br);

// Crear el campo de número de teléfono
const phoneLabel = document.createElement('label');
phoneLabel.textContent = 'Número de teléfono:';
const phoneInput = document.createElement('input');
phoneInput.type = 'tel';
phoneInput.id = 'phone';
phoneInput.name = 'telefono';
form.appendChild(phoneLabel);
form.appendChild(phoneInput);

form.appendChild(br);

// Crear el campo del mensaje
const messageLabel = document.createElement('label');
messageLabel.textContent = 'Mensaje:';
const messageInput = document.createElement('textarea');
messageInput.id = 'message';
messageInput.name = 'mensaje';
form.appendChild(messageLabel);
form.appendChild(messageInput);

form.appendChild(br);

// Crear el botón de envío
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Enviar';
form.appendChild(submitButton);

// Agregar el formulario al contenedor
form.appendChild(br);
container.appendChild(form);

// Agregar el evento de envío al formulario
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  console.log(`Nombre: ${name}, Correo electrónico: ${email}`);
  // Aquí iría el código para enviar los datos del formulario al servidor
});
