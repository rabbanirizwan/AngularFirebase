import { Component, OnInit } from '@angular/core';
import * as _ from "lodash";
import {Upload} from '../../upload';
import {UploadService} from '../../services/upload.service';
@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;
  constructor(private upSvc:UploadService) { }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
}

uploadSingle() {
  let file = this.selectedFiles.item(0)
  this.currentUpload = new Upload(file);
  this.upSvc.pushUpload(this.currentUpload)
}

uploadMulti() {
  let files = this.selectedFiles
  let filesIndex = _.range(files.length)
  _.each(filesIndex, (idx) => {
    this.currentUpload = new Upload(files[idx]);
    this.upSvc.pushUpload(this.currentUpload)}
  )
}
  ngOnInit() {
  }

}
