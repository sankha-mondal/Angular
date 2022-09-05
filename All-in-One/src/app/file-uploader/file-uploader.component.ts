import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


//   afuConfig = {
//     uploadAPI: {
//       url: "http://localhost:8080/api/csv/upload"
//     }
// };

//------------------------------------------------------------------------------

  file: any;
  flag: boolean = true;
  fileUploadURL = "http://localhost:9090/csv/upload";

  selectFile(event: any) {
      console.log(event);
      this.file = event.target.files[0];
      console.log(this.file);
  }

  uploadFile() {
    let formData = new FormData();
    formData.append("file",this.file);  //  here "file" is equal to backend @RequestParam("file")

    this.flag = false;
    this.http.post(this.fileUploadURL,formData).subscribe(
      (data: any)=>{
        // success
        console.log(data);
        this.flag = true;
        alert(data.message);
      },
      (error)=>{
        // error
        this.flag = true;
        console.log(error);
        alert("Error: File not uploaded")
      }
    );
  }

}
