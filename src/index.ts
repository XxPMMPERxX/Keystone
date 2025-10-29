import { PlayerSpawnAfterEvent, world } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe((ev: PlayerSpawnAfterEvent) => {
  const { player, initialSpawn } = ev;

  if (!initialSpawn) {
    return;
  }

  player.sendMessage('ようこそ!!');
});
