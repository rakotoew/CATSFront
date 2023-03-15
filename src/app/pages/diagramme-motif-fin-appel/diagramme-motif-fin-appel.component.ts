import { Component, OnInit, OnChanges} from '@angular/core';
import {ChartData} from "chart.js";
import {CaisseRegionaleService} from "../../service/caisse-regionale.service";
import {PostService} from "../../service/post.service";
import {getCouleurs} from "../../../utils";

@Component({
  selector: 'diagramme-motif-fin-appel',
  templateUrl: './diagramme-motif-fin-appel.component.html',
  styleUrls: ['./diagramme-motif-fin-appel.component.css']
})
export class DiagrammeMotifFinAppelComponent implements OnInit, OnChanges {
  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Attributs ////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  public label: string[];
  public motifsFinAppel: number[];

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: ["label"],
    datasets: [ {
      data: [0]
    } ]
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Constructeurs ////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  constructor(private CaisseRegionale: CaisseRegionaleService, private Post: PostService) {
    this.label = [""];
    this.motifsFinAppel = [0];
    this.CaisseRegionale.current.subscribe(_ => this.getDataStatus());
  }

  ngOnInit(): void { this.getDataStatus(); }

  ngOnChanges(): void {
    this.pieChartData = {
      labels: this.label,
      datasets: [{
        data: this.motifsFinAppel,
        backgroundColor: getCouleurs(this.motifsFinAppel.length),
      }]
    };
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////
  // Getters //////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////////////
  private getDataStatus() {
    this.Post.postMotifsFinAppel().subscribe(data => {
      this.label = data.label;
      this.motifsFinAppel = data.nbr;
      this.ngOnChanges();
    });
  }
}