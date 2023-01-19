import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-news-management-create',
  templateUrl: './news-management-create.component.html',
  styleUrls: ['./news-management-create.component.css'],
})
export class NewsManagementCreateComponent {
  bool: any;
  message: MatSnackBar;

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    public datepipe: DatePipe,
    private messageSnackBar: MatSnackBar
  ) {
    this.message = messageSnackBar;
  }

  newsForm = this.formBuilder.group({
    newsTitle: ['', Validators.required],
    newsDate: ['', Validators.required],
    newsContent: ['', Validators.required],
    upVotes: [[''], Validators.required],
    downVotes: [[''], Validators.required],
  });

  createNews(): void {
    this.bool = true;
    let currentDateTime = this.datepipe.transform(
      new Date(),
      'MM/dd/yyyy h:mm:ss'
    );

    this.newsForm.get('newsDate')?.setValue(currentDateTime);

    this.newsService.createNews(this.newsForm.value).subscribe(
      (res) => {
        console.log(this.newsForm);
        localStorage.setItem('token', res.token);
        this.messageSnackBar.open('Noticia creada satisfactoriamente.', 'OK!', {
          duration: 3000,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
