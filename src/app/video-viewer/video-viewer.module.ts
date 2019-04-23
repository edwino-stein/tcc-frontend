import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoViewerRoutingModule } from './video-viewer-routing.module';
import { VideoViewerComponent } from './video-viewer.component';
import { VideoComponent } from './components/video/video.component';
import { SharedModule } from '../shared/shared.module';
import { JsMpegService } from './services/js-mpeg.service';

@NgModule({
    declarations: [
        VideoViewerComponent,
        VideoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        VideoViewerRoutingModule
    ],
    providers:[
        JsMpegService
    ]
})
export class VideoViewerModule { }
