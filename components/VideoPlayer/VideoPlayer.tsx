import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
export default function VideoPlayer(){
    const url = 'https://caspian15.asset.aparat.com/aparat-video/4323c352c7feaa4de506ad0e0bf3773457463914-144p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjBiZTA3OGM3Y2Q2NGU2ZDI1ZjVlOTVlYTQ0M2E0NDFhIiwiZXhwIjoxNzA4ODg1MDQ3LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.tt6PeBRYVIAxnMu9wzMzyI4AKSNmkymYy35Dzky_CYU'
    return (
        <MediaPlayer title="Sprite Fight" src={url} className={'w-full '}>
            <MediaProvider />
            <DefaultVideoLayout thumbnails="https://image.mux.com/VZtzUzGRv02OhRnZCxcNg49OilvolTqdnFLEqBsTwaxU/storyboard.vtt" icons={defaultLayoutIcons} />
        </MediaPlayer>
    )
}