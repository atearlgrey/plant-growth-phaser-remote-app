import Phaser from 'phaser'
import AnimationKeys from '~/consts/AnimationKeys'
import SceneKeys from '~/consts/SceneKeys'
import TextureKeys from '~/consts/TextureKeys'
import VoiceKeys from '~/consts/VoiceKeys'

const assetBase = (window as any).__assets__ || 'assets';
const dataBase = (window as any).__data__ || 'data';

export default class Preloader extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Preloader)
    }

    preload() {
        // load background
        this.load.image(TextureKeys.BackgroundRoom, assetBase + '/background-room.png');

        // load button
        this.load.image(TextureKeys.ButtonStart, assetBase + '/btn-start.png');
        this.load.image(TextureKeys.ButtonStop, assetBase + '/btn-paused.png');
        this.load.image(TextureKeys.ButtonResume, assetBase + '/btn-resume.png');
        this.load.image(TextureKeys.ButtonReset, assetBase + '/btn-reset.png');
        this.load.image(TextureKeys.ButtonResult, assetBase + '/btn-result.png');
        this.load.image(TextureKeys.ButtonConclusion, assetBase + '/btn-conclusion.png');
        this.load.image(TextureKeys.ButtonComplete, assetBase + '/btn-complete.png');
        this.load.image(TextureKeys.ButtonZoom, assetBase + '/btn-unzoom.png');
        this.load.image(TextureKeys.ButtonUnZoom, assetBase + '/btn-zoom.png');
        this.load.image(TextureKeys.ButtonSound, assetBase + '/btn-sound.png');
        this.load.image(TextureKeys.ButtonMute, assetBase + '/btn-mute.png');
        this.load.image(TextureKeys.ButtonMeter, assetBase + '/btn-meter.png');
        this.load.image(TextureKeys.ButtonUnMeter, assetBase + '/btn-unmeter.png');

        this.load.image(TextureKeys.Window, assetBase + '/window.png');
        this.load.image(TextureKeys.WindowSun, assetBase + '/window-sun.png');

        this.load.image(TextureKeys.LightOn, assetBase + '/light-on.png');
        this.load.image(TextureKeys.LightOff, assetBase + '/light-off.png');

        this.load.image(TextureKeys.TimelineSlider, assetBase + '/timeline-slider.png');
        this.load.image(TextureKeys.TimelineCoin, assetBase + '/timeline-coin.png');
        this.load.image(TextureKeys.Table, assetBase + '/table.png');
        this.load.image(TextureKeys.PlantPot, assetBase + '/plant-pot.png');
        this.load.image(TextureKeys.ThermoHygrometer, assetBase + '/thermo-hygrometer.png');
        this.load.image(TextureKeys.Ruler50, assetBase + '/ruler-50cm.png');

        this.load.image(TextureKeys.PotEmpty, assetBase + '/pot-empty.png');
        this.load.image(TextureKeys.PotGardenSoil, assetBase + '/pot-garden-soil.png');
        this.load.image(TextureKeys.PotSandySoil, assetBase + '/pot-sandy-soil.png');
        this.load.image(TextureKeys.PotOrganicSoil, assetBase + '/pot-organic-soil.png');


        this.load.image(TextureKeys.MorningGloryLeaf, assetBase + '/morning-glory-leaf.png');
        this.load.image(TextureKeys.LettuceLeaf, assetBase + '/lettuce-leaf.png');
        this.load.image(TextureKeys.HandPointer, assetBase + '/hand-pointer.png');

        this.load.image(TextureKeys.DefaultMorningGloryLeaf, assetBase + '/morning-glory-leaf.png');
        this.load.image(TextureKeys.DefaultLettuceLeaf, assetBase + '/lettuce-leaf.png');

        this.load.image(TextureKeys.BucketNoWater, assetBase + '/watering_can_empty.png');
        this.load.image(TextureKeys.BucketWater, assetBase + '/watering_can_watering.png');

        // soil icons
        this.load.image(TextureKeys.GardenSoil, assetBase + '/right-menu/soil/garden-soil.png');
        this.load.image(TextureKeys.SandySoil, assetBase + '/right-menu/soil/sandy-soil.png');
        this.load.image(TextureKeys.OrganicSoil, assetBase + '/right-menu/soil/organic-soil.png');

        // pot icons
        this.load.image(TextureKeys.SmallPot, assetBase + '/right-menu/pot/small-pot.png');
        this.load.image(TextureKeys.MediumPot, assetBase + '/right-menu/pot/medium-pot.png');
        this.load.image(TextureKeys.LargePot, assetBase + '/right-menu/pot/large-pot.png');

        // voice
        this.load.audio(VoiceKeys.BGM, assetBase + '/voice/bgm/bgm.mp3');
        this.load.audio(VoiceKeys.ButtonSelect, assetBase + '/voice/se/select.mp3');
        this.load.audio(VoiceKeys.Start, assetBase + '/voice/se/start.mp3');
        this.load.audio(VoiceKeys.Complete, assetBase + '/voice/se/complete.mp3');
        this.load.audio(VoiceKeys.Plant, assetBase + '/voice/se/plant.mp3');
        this.load.audio(VoiceKeys.Grow, assetBase + '/voice/se/grow.mp3');

        // load image for plant
        this.load.image(TextureKeys.MorningGlorySunWeek0, assetBase + '/morning-glory/sun/week0.png');
        this.load.image(TextureKeys.MorningGlorySunWeek1, assetBase + '/morning-glory/sun/week1.png');
        this.load.image(TextureKeys.MorningGlorySunWeek2, assetBase + '/morning-glory/sun/week2.png');
        this.load.image(TextureKeys.MorningGlorySunWeek3, assetBase + '/morning-glory/sun/week3.png');
        this.load.image(TextureKeys.MorningGlorySunWeek4, assetBase + '/morning-glory/sun/week4.png');

        this.load.image(TextureKeys.MorningGloryLedWeek0, assetBase + '/morning-glory/led/week0.png');
        this.load.image(TextureKeys.MorningGloryLedWeek1, assetBase + '/morning-glory/led/week1.png');
        this.load.image(TextureKeys.MorningGloryLedWeek2, assetBase + '/morning-glory/led/week2.png');
        this.load.image(TextureKeys.MorningGloryLedWeek3, assetBase + '/morning-glory/led/week3.png');
        this.load.image(TextureKeys.MorningGloryLedWeek4, assetBase + '/morning-glory/led/week4.png');

        this.load.image(TextureKeys.MorningGloryMixedWeek0, assetBase + '/morning-glory/mixed/week0.png');
        this.load.image(TextureKeys.MorningGloryMixedWeek1, assetBase + '/morning-glory/mixed/week1.png');
        this.load.image(TextureKeys.MorningGloryMixedWeek2, assetBase + '/morning-glory/mixed/week2.png');
        this.load.image(TextureKeys.MorningGloryMixedWeek3, assetBase + '/morning-glory/mixed/week3.png');
        this.load.image(TextureKeys.MorningGloryMixedWeek4, assetBase + '/morning-glory/mixed/week4.png');

        this.load.image(TextureKeys.LettuceSunWeek0, assetBase + '/lettuce/sun/week0.png');
        this.load.image(TextureKeys.LettuceSunWeek1, assetBase + '/lettuce/sun/week1.png');
        this.load.image(TextureKeys.LettuceSunWeek2, assetBase + '/lettuce/sun/week2.png');
        this.load.image(TextureKeys.LettuceSunWeek3, assetBase + '/lettuce/sun/week3.png');
        this.load.image(TextureKeys.LettuceSunWeek4, assetBase + '/lettuce/sun/week4.png');

        this.load.image(TextureKeys.LettuceLedWeek0, assetBase + '/lettuce/led/week0.png');
        this.load.image(TextureKeys.LettuceLedWeek1, assetBase + '/lettuce/led/week1.png');
        this.load.image(TextureKeys.LettuceLedWeek2, assetBase + '/lettuce/led/week2.png');
        this.load.image(TextureKeys.LettuceLedWeek3, assetBase + '/lettuce/led/week3.png');
        this.load.image(TextureKeys.LettuceLedWeek4, assetBase + '/lettuce/led/week4.png');

        this.load.image(TextureKeys.LettuceMixedWeek0, assetBase + '/lettuce/mixed/week0.png');
        this.load.image(TextureKeys.LettuceMixedWeek1, assetBase + '/lettuce/mixed/week1.png');
        this.load.image(TextureKeys.LettuceMixedWeek2, assetBase + '/lettuce/mixed/week2.png');
        this.load.image(TextureKeys.LettuceMixedWeek3, assetBase + '/lettuce/mixed/week3.png');
        this.load.image(TextureKeys.LettuceMixedWeek4, assetBase + '/lettuce/mixed/week4.png');

        this.load.json('growthData', dataBase + '/growth.json');
    }

    create() {
        this.scene.start(SceneKeys.Plant)
    }
}
