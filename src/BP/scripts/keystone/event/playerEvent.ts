/* eslint-disable @typescript-eslint/no-unused-vars */

import { 
  BlockComponentPlayerBreakEvent,
  BlockComponentPlayerInteractEvent,
  BlockComponentPlayerPlaceBeforeEvent,
  PlayerBreakBlockAfterEvent,
  PlayerBreakBlockBeforeEvent,
  PlayerButtonInputAfterEvent,
  PlayerDimensionChangeAfterEvent,
  PlayerEmoteAfterEvent,
  PlayerGameModeChangeAfterEvent,
  PlayerGameModeChangeBeforeEvent,
  PlayerHotbarSelectedSlotChangeAfterEvent,
  PlayerInputModeChangeAfterEvent,
  PlayerInputPermissionCategoryChangeAfterEvent,
  PlayerInteractWithBlockAfterEvent,
  PlayerInteractWithBlockBeforeEvent,
  PlayerInteractWithEntityAfterEvent,
  PlayerInteractWithEntityBeforeEvent,
  PlayerInventoryItemChangeAfterEvent,
  PlayerJoinAfterEvent,
  PlayerLeaveAfterEvent,
  PlayerLeaveBeforeEvent,
  PlayerPlaceBlockAfterEvent,
  PlayerSpawnAfterEvent
} from '@minecraft/server';
import { WrappedPlayer } from '../entity/player';
import { Listener } from './event';

abstract class PlayerEvent implements Listener {
  onJoinAfter(event: PlayerJoinAfterEvent): void {}
  onLeaveAfter(event: PlayerLeaveAfterEvent): void {}

  onLeaveBefore(event: PlayerLeaveBeforeEvent, player: WrappedPlayer): void {}
  onBreakBlockBefore(event: PlayerBreakBlockBeforeEvent, player: WrappedPlayer): void {}
  onGameModeChangeBefore(event: PlayerGameModeChangeBeforeEvent, player: WrappedPlayer): void {}
  onPlayerInteractWithBlockBefore(event: PlayerInteractWithBlockBeforeEvent, player: WrappedPlayer): void {}
  onPlayerInteractWithEntityBefore(event: PlayerInteractWithEntityBeforeEvent, player: WrappedPlayer): void {}

  onBlockComponentPlayerPlaceBefore(event: BlockComponentPlayerPlaceBeforeEvent, player?: WrappedPlayer): void {}
  onBlockComponentPlayerInteract(event: BlockComponentPlayerInteractEvent, player?: WrappedPlayer): void {}
  onBlockComponentPlayerBreak(event: BlockComponentPlayerBreakEvent, player?: WrappedPlayer): void {}

  onEmoteAfter(event: PlayerEmoteAfterEvent, player: WrappedPlayer): void {}
  onSpawnAfter(event: PlayerSpawnAfterEvent, player: WrappedPlayer): void {}
  onBreakBlockAfter(event: PlayerBreakBlockAfterEvent, player: WrappedPlayer): void {}
  onPlaceBlockAfter(event: PlayerPlaceBlockAfterEvent, player: WrappedPlayer): void {}
  onButtonInputAfter(event: PlayerButtonInputAfterEvent, player: WrappedPlayer): void {}
  onGameModeChangeAfter(event: PlayerGameModeChangeAfterEvent, player: WrappedPlayer): void {}
  onDimensionChangeAfter(event: PlayerDimensionChangeAfterEvent, player: WrappedPlayer): void {}
  onInputModeChangeAfter(event: PlayerInputModeChangeAfterEvent, player: WrappedPlayer): void {}
  onInteractWithBlockAfter(event: PlayerInteractWithBlockAfterEvent, player: WrappedPlayer): void {}
  onInteractWithEntityAfter(event: PlayerInteractWithEntityAfterEvent, player: WrappedPlayer): void {}
  onInventoryItemChangeAfter(event: PlayerInventoryItemChangeAfterEvent, player: WrappedPlayer): void {}
  onHotbarSelectedSlotChangeAfter(event: PlayerHotbarSelectedSlotChangeAfterEvent, player: WrappedPlayer): void {}
  onInputPermissionCategoryChangeAfter(event: PlayerInputPermissionCategoryChangeAfterEvent, player: WrappedPlayer): void {}
}
