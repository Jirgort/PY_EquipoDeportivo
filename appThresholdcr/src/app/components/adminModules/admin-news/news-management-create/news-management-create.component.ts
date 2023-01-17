import { Component } from '@angular/core';
import { NewsService } from '../../../../services/news.service';
import { Validators, FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news-management-create',
  templateUrl: './news-management-create.component.html',
  styleUrls: ['./news-management-create.component.css'],
})
export class NewsManagementCreateComponent {
  bool: any;

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    public datepipe: DatePipe
  ) {}

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
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
