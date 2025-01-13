const mongoose = require('mongoose');

// Define el esquema para las solicitudes de canciones
const songRequestSchema = new mongoose.Schema({
  songName: { type: String, required: true },
  requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Relación con la colección de usuarios
  dj: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },         // Relación con DJs
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },     // Relación con eventos
  priority: { type: String, enum: ['low', 'medium', 'high'], default: 'medium' },    // Prioridad
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' }, // Estado
  createdAt: { type: Date, default: Date.now },                                      // Fecha de creación
});

// Exporta el modelo
module.exports = mongoose.model('SongRequest', songRequestSchema);