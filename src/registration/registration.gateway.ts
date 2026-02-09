import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RegistrationGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('🟢 Registration WebSocket initialized');
  }

  handleConnection(client: Socket) {
    console.log(`🔌 Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`❌ Client disconnected: ${client.id}`);
  }

  // 🔥 Emit helpers
  emitRegistrationCreated(data: any) {
    this.server.emit('registration_created', data);
  }

  emitRegistrationUpdated(data: any) {
    this.server.emit('registration_updated', data);
  }

  emitRegistrationDeleted(id: string) {
    this.server.emit('registration_deleted', { id });
  }
}
