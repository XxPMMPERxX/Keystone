import './keystone/keystone';
import './keystone/entity/player';
import { PlayerSpawnAfterEvent, world } from '@minecraft/server';
import { PlayerRegistry } from './keystone/entity/player';

world.afterEvents.playerSpawn.subscribe((ev: PlayerSpawnAfterEvent) => {
  const wrappedPlayer = PlayerRegistry.fromPlayer(ev.player);
  wrappedPlayer.sendMessage('移譲処理の確認');
});
