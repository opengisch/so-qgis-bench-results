/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 180.0, "minX": 0.0, "maxY": 3111.0, "series": [{"data": [[0.0, 180.0], [0.1, 180.0], [0.2, 184.0], [0.3, 185.0], [0.4, 185.0], [0.5, 185.0], [0.6, 185.0], [0.7, 188.0], [0.8, 188.0], [0.9, 190.0], [1.0, 193.0], [1.1, 193.0], [1.2, 193.0], [1.3, 194.0], [1.4, 195.0], [1.5, 195.0], [1.6, 195.0], [1.7, 197.0], [1.8, 198.0], [1.9, 198.0], [2.0, 198.0], [2.1, 198.0], [2.2, 199.0], [2.3, 199.0], [2.4, 199.0], [2.5, 201.0], [2.6, 202.0], [2.7, 202.0], [2.8, 202.0], [2.9, 204.0], [3.0, 204.0], [3.1, 204.0], [3.2, 204.0], [3.3, 204.0], [3.4, 204.0], [3.5, 205.0], [3.6, 205.0], [3.7, 205.0], [3.8, 205.0], [3.9, 206.0], [4.0, 207.0], [4.1, 207.0], [4.2, 207.0], [4.3, 208.0], [4.4, 209.0], [4.5, 209.0], [4.6, 209.0], [4.7, 210.0], [4.8, 210.0], [4.9, 211.0], [5.0, 211.0], [5.1, 212.0], [5.2, 213.0], [5.3, 213.0], [5.4, 214.0], [5.5, 216.0], [5.6, 216.0], [5.7, 216.0], [5.8, 220.0], [5.9, 224.0], [6.0, 227.0], [6.1, 227.0], [6.2, 228.0], [6.3, 229.0], [6.4, 231.0], [6.5, 231.0], [6.6, 231.0], [6.7, 236.0], [6.8, 236.0], [6.9, 237.0], [7.0, 238.0], [7.1, 242.0], [7.2, 242.0], [7.3, 243.0], [7.4, 243.0], [7.5, 250.0], [7.6, 250.0], [7.7, 253.0], [7.8, 254.0], [7.9, 257.0], [8.0, 257.0], [8.1, 258.0], [8.2, 260.0], [8.3, 260.0], [8.4, 260.0], [8.5, 261.0], [8.6, 262.0], [8.7, 262.0], [8.8, 265.0], [8.9, 268.0], [9.0, 269.0], [9.1, 269.0], [9.2, 269.0], [9.3, 269.0], [9.4, 270.0], [9.5, 270.0], [9.6, 271.0], [9.7, 272.0], [9.8, 272.0], [9.9, 272.0], [10.0, 272.0], [10.1, 274.0], [10.2, 274.0], [10.3, 274.0], [10.4, 274.0], [10.5, 275.0], [10.6, 275.0], [10.7, 275.0], [10.8, 275.0], [10.9, 275.0], [11.0, 275.0], [11.1, 275.0], [11.2, 277.0], [11.3, 278.0], [11.4, 278.0], [11.5, 278.0], [11.6, 278.0], [11.7, 278.0], [11.8, 279.0], [11.9, 279.0], [12.0, 279.0], [12.1, 279.0], [12.2, 281.0], [12.3, 281.0], [12.4, 281.0], [12.5, 281.0], [12.6, 281.0], [12.7, 281.0], [12.8, 282.0], [12.9, 282.0], [13.0, 282.0], [13.1, 282.0], [13.2, 283.0], [13.3, 283.0], [13.4, 283.0], [13.5, 283.0], [13.6, 283.0], [13.7, 283.0], [13.8, 283.0], [13.9, 284.0], [14.0, 284.0], [14.1, 284.0], [14.2, 285.0], [14.3, 286.0], [14.4, 286.0], [14.5, 286.0], [14.6, 286.0], [14.7, 286.0], [14.8, 286.0], [14.9, 287.0], [15.0, 287.0], [15.1, 287.0], [15.2, 287.0], [15.3, 288.0], [15.4, 288.0], [15.5, 288.0], [15.6, 288.0], [15.7, 288.0], [15.8, 288.0], [15.9, 288.0], [16.0, 289.0], [16.1, 289.0], [16.2, 290.0], [16.3, 290.0], [16.4, 290.0], [16.5, 291.0], [16.6, 292.0], [16.7, 292.0], [16.8, 293.0], [16.9, 293.0], [17.0, 293.0], [17.1, 293.0], [17.2, 293.0], [17.3, 294.0], [17.4, 294.0], [17.5, 295.0], [17.6, 296.0], [17.7, 297.0], [17.8, 297.0], [17.9, 297.0], [18.0, 300.0], [18.1, 301.0], [18.2, 301.0], [18.3, 301.0], [18.4, 302.0], [18.5, 302.0], [18.6, 303.0], [18.7, 304.0], [18.8, 308.0], [18.9, 308.0], [19.0, 308.0], [19.1, 311.0], [19.2, 313.0], [19.3, 313.0], [19.4, 315.0], [19.5, 316.0], [19.6, 317.0], [19.7, 317.0], [19.8, 317.0], [19.9, 320.0], [20.0, 320.0], [20.1, 323.0], [20.2, 325.0], [20.3, 328.0], [20.4, 328.0], [20.5, 329.0], [20.6, 331.0], [20.7, 334.0], [20.8, 334.0], [20.9, 335.0], [21.0, 336.0], [21.1, 339.0], [21.2, 339.0], [21.3, 340.0], [21.4, 341.0], [21.5, 344.0], [21.6, 344.0], [21.7, 344.0], [21.8, 346.0], [21.9, 346.0], [22.0, 346.0], [22.1, 346.0], [22.2, 347.0], [22.3, 347.0], [22.4, 347.0], [22.5, 350.0], [22.6, 351.0], [22.7, 351.0], [22.8, 351.0], [22.9, 351.0], [23.0, 352.0], [23.1, 352.0], [23.2, 352.0], [23.3, 352.0], [23.4, 352.0], [23.5, 352.0], [23.6, 354.0], [23.7, 354.0], [23.8, 354.0], [23.9, 356.0], [24.0, 356.0], [24.1, 357.0], [24.2, 357.0], [24.3, 358.0], [24.4, 358.0], [24.5, 358.0], [24.6, 358.0], [24.7, 358.0], [24.8, 360.0], [24.9, 360.0], [25.0, 360.0], [25.1, 362.0], [25.2, 362.0], [25.3, 362.0], [25.4, 362.0], [25.5, 364.0], [25.6, 364.0], [25.7, 364.0], [25.8, 364.0], [25.9, 364.0], [26.0, 364.0], [26.1, 364.0], [26.2, 364.0], [26.3, 365.0], [26.4, 365.0], [26.5, 365.0], [26.6, 366.0], [26.7, 367.0], [26.8, 367.0], [26.9, 367.0], [27.0, 368.0], [27.1, 369.0], [27.2, 369.0], [27.3, 369.0], [27.4, 370.0], [27.5, 370.0], [27.6, 370.0], [27.7, 370.0], [27.8, 372.0], [27.9, 372.0], [28.0, 372.0], [28.1, 372.0], [28.2, 374.0], [28.3, 378.0], [28.4, 378.0], [28.5, 379.0], [28.6, 379.0], [28.7, 379.0], [28.8, 380.0], [28.9, 381.0], [29.0, 383.0], [29.1, 383.0], [29.2, 387.0], [29.3, 387.0], [29.4, 390.0], [29.5, 390.0], [29.6, 396.0], [29.7, 411.0], [29.8, 416.0], [29.9, 416.0], [30.0, 416.0], [30.1, 416.0], [30.2, 416.0], [30.3, 417.0], [30.4, 419.0], [30.5, 420.0], [30.6, 420.0], [30.7, 420.0], [30.8, 422.0], [30.9, 424.0], [31.0, 424.0], [31.1, 426.0], [31.2, 426.0], [31.3, 427.0], [31.4, 427.0], [31.5, 428.0], [31.6, 428.0], [31.7, 428.0], [31.8, 430.0], [31.9, 432.0], [32.0, 433.0], [32.1, 433.0], [32.2, 436.0], [32.3, 437.0], [32.4, 437.0], [32.5, 437.0], [32.6, 437.0], [32.7, 437.0], [32.8, 437.0], [32.9, 437.0], [33.0, 438.0], [33.1, 441.0], [33.2, 441.0], [33.3, 441.0], [33.4, 442.0], [33.5, 447.0], [33.6, 447.0], [33.7, 448.0], [33.8, 449.0], [33.9, 449.0], [34.0, 449.0], [34.1, 450.0], [34.2, 450.0], [34.3, 453.0], [34.4, 453.0], [34.5, 453.0], [34.6, 455.0], [34.7, 463.0], [34.8, 463.0], [34.9, 464.0], [35.0, 464.0], [35.1, 464.0], [35.2, 469.0], [35.3, 471.0], [35.4, 493.0], [35.5, 493.0], [35.6, 493.0], [35.7, 496.0], [35.8, 496.0], [35.9, 496.0], [36.0, 498.0], [36.1, 501.0], [36.2, 504.0], [36.3, 504.0], [36.4, 504.0], [36.5, 506.0], [36.6, 506.0], [36.7, 506.0], [36.8, 506.0], [36.9, 507.0], [37.0, 507.0], [37.1, 507.0], [37.2, 507.0], [37.3, 508.0], [37.4, 508.0], [37.5, 508.0], [37.6, 509.0], [37.7, 510.0], [37.8, 510.0], [37.9, 510.0], [38.0, 511.0], [38.1, 511.0], [38.2, 511.0], [38.3, 512.0], [38.4, 512.0], [38.5, 512.0], [38.6, 512.0], [38.7, 512.0], [38.8, 515.0], [38.9, 515.0], [39.0, 516.0], [39.1, 516.0], [39.2, 516.0], [39.3, 516.0], [39.4, 517.0], [39.5, 517.0], [39.6, 517.0], [39.7, 517.0], [39.8, 517.0], [39.9, 517.0], [40.0, 517.0], [40.1, 517.0], [40.2, 518.0], [40.3, 518.0], [40.4, 518.0], [40.5, 518.0], [40.6, 519.0], [40.7, 520.0], [40.8, 520.0], [40.9, 520.0], [41.0, 520.0], [41.1, 522.0], [41.2, 522.0], [41.3, 522.0], [41.4, 522.0], [41.5, 523.0], [41.6, 523.0], [41.7, 523.0], [41.8, 523.0], [41.9, 523.0], [42.0, 523.0], [42.1, 524.0], [42.2, 524.0], [42.3, 524.0], [42.4, 524.0], [42.5, 524.0], [42.6, 525.0], [42.7, 525.0], [42.8, 525.0], [42.9, 525.0], [43.0, 525.0], [43.1, 525.0], [43.2, 525.0], [43.3, 526.0], [43.4, 526.0], [43.5, 526.0], [43.6, 526.0], [43.7, 526.0], [43.8, 526.0], [43.9, 526.0], [44.0, 526.0], [44.1, 527.0], [44.2, 527.0], [44.3, 527.0], [44.4, 528.0], [44.5, 528.0], [44.6, 528.0], [44.7, 528.0], [44.8, 529.0], [44.9, 529.0], [45.0, 529.0], [45.1, 529.0], [45.2, 529.0], [45.3, 529.0], [45.4, 529.0], [45.5, 529.0], [45.6, 530.0], [45.7, 530.0], [45.8, 530.0], [45.9, 531.0], [46.0, 531.0], [46.1, 531.0], [46.2, 531.0], [46.3, 531.0], [46.4, 532.0], [46.5, 532.0], [46.6, 532.0], [46.7, 532.0], [46.8, 532.0], [46.9, 532.0], [47.0, 532.0], [47.1, 533.0], [47.2, 533.0], [47.3, 533.0], [47.4, 533.0], [47.5, 534.0], [47.6, 534.0], [47.7, 534.0], [47.8, 534.0], [47.9, 535.0], [48.0, 535.0], [48.1, 535.0], [48.2, 535.0], [48.3, 535.0], [48.4, 535.0], [48.5, 536.0], [48.6, 536.0], [48.7, 536.0], [48.8, 536.0], [48.9, 536.0], [49.0, 536.0], [49.1, 536.0], [49.2, 538.0], [49.3, 538.0], [49.4, 538.0], [49.5, 538.0], [49.6, 539.0], [49.7, 539.0], [49.8, 539.0], [49.9, 539.0], [50.0, 540.0], [50.1, 540.0], [50.2, 540.0], [50.3, 540.0], [50.4, 540.0], [50.5, 541.0], [50.6, 541.0], [50.7, 541.0], [50.8, 541.0], [50.9, 542.0], [51.0, 542.0], [51.1, 542.0], [51.2, 542.0], [51.3, 542.0], [51.4, 542.0], [51.5, 543.0], [51.6, 543.0], [51.7, 543.0], [51.8, 543.0], [51.9, 543.0], [52.0, 544.0], [52.1, 544.0], [52.2, 545.0], [52.3, 545.0], [52.4, 545.0], [52.5, 545.0], [52.6, 546.0], [52.7, 546.0], [52.8, 546.0], [52.9, 546.0], [53.0, 546.0], [53.1, 547.0], [53.2, 548.0], [53.3, 548.0], [53.4, 548.0], [53.5, 548.0], [53.6, 548.0], [53.7, 549.0], [53.8, 550.0], [53.9, 551.0], [54.0, 551.0], [54.1, 552.0], [54.2, 553.0], [54.3, 553.0], [54.4, 553.0], [54.5, 555.0], [54.6, 556.0], [54.7, 557.0], [54.8, 557.0], [54.9, 557.0], [55.0, 558.0], [55.1, 558.0], [55.2, 558.0], [55.3, 558.0], [55.4, 560.0], [55.5, 560.0], [55.6, 561.0], [55.7, 562.0], [55.8, 562.0], [55.9, 562.0], [56.0, 562.0], [56.1, 564.0], [56.2, 567.0], [56.3, 567.0], [56.4, 571.0], [56.5, 571.0], [56.6, 574.0], [56.7, 574.0], [56.8, 576.0], [56.9, 576.0], [57.0, 576.0], [57.1, 577.0], [57.2, 577.0], [57.3, 578.0], [57.4, 578.0], [57.5, 578.0], [57.6, 579.0], [57.7, 579.0], [57.8, 579.0], [57.9, 579.0], [58.0, 580.0], [58.1, 581.0], [58.2, 581.0], [58.3, 582.0], [58.4, 583.0], [58.5, 583.0], [58.6, 583.0], [58.7, 585.0], [58.8, 585.0], [58.9, 585.0], [59.0, 587.0], [59.1, 591.0], [59.2, 593.0], [59.3, 593.0], [59.4, 593.0], [59.5, 595.0], [59.6, 595.0], [59.7, 595.0], [59.8, 596.0], [59.9, 596.0], [60.0, 598.0], [60.1, 598.0], [60.2, 599.0], [60.3, 600.0], [60.4, 600.0], [60.5, 600.0], [60.6, 601.0], [60.7, 606.0], [60.8, 606.0], [60.9, 607.0], [61.0, 608.0], [61.1, 609.0], [61.2, 609.0], [61.3, 610.0], [61.4, 611.0], [61.5, 616.0], [61.6, 616.0], [61.7, 616.0], [61.8, 616.0], [61.9, 616.0], [62.0, 617.0], [62.1, 618.0], [62.2, 619.0], [62.3, 619.0], [62.4, 620.0], [62.5, 620.0], [62.6, 620.0], [62.7, 620.0], [62.8, 623.0], [62.9, 626.0], [63.0, 626.0], [63.1, 626.0], [63.2, 626.0], [63.3, 627.0], [63.4, 627.0], [63.5, 628.0], [63.6, 629.0], [63.7, 629.0], [63.8, 629.0], [63.9, 632.0], [64.0, 639.0], [64.1, 642.0], [64.2, 642.0], [64.3, 642.0], [64.4, 642.0], [64.5, 643.0], [64.6, 643.0], [64.7, 644.0], [64.8, 644.0], [64.9, 646.0], [65.0, 646.0], [65.1, 647.0], [65.2, 649.0], [65.3, 649.0], [65.4, 649.0], [65.5, 649.0], [65.6, 650.0], [65.7, 650.0], [65.8, 650.0], [65.9, 650.0], [66.0, 653.0], [66.1, 653.0], [66.2, 655.0], [66.3, 655.0], [66.4, 657.0], [66.5, 657.0], [66.6, 660.0], [66.7, 660.0], [66.8, 660.0], [66.9, 660.0], [67.0, 661.0], [67.1, 661.0], [67.2, 661.0], [67.3, 661.0], [67.4, 661.0], [67.5, 662.0], [67.6, 662.0], [67.7, 662.0], [67.8, 663.0], [67.9, 664.0], [68.0, 664.0], [68.1, 664.0], [68.2, 665.0], [68.3, 665.0], [68.4, 665.0], [68.5, 665.0], [68.6, 666.0], [68.7, 666.0], [68.8, 666.0], [68.9, 666.0], [69.0, 666.0], [69.1, 666.0], [69.2, 667.0], [69.3, 668.0], [69.4, 668.0], [69.5, 668.0], [69.6, 668.0], [69.7, 668.0], [69.8, 668.0], [69.9, 668.0], [70.0, 668.0], [70.1, 669.0], [70.2, 669.0], [70.3, 669.0], [70.4, 669.0], [70.5, 669.0], [70.6, 669.0], [70.7, 670.0], [70.8, 670.0], [70.9, 670.0], [71.0, 670.0], [71.1, 671.0], [71.2, 671.0], [71.3, 671.0], [71.4, 671.0], [71.5, 672.0], [71.6, 672.0], [71.7, 672.0], [71.8, 672.0], [71.9, 673.0], [72.0, 673.0], [72.1, 673.0], [72.2, 673.0], [72.3, 674.0], [72.4, 674.0], [72.5, 674.0], [72.6, 675.0], [72.7, 676.0], [72.8, 676.0], [72.9, 676.0], [73.0, 677.0], [73.1, 677.0], [73.2, 683.0], [73.3, 683.0], [73.4, 683.0], [73.5, 683.0], [73.6, 683.0], [73.7, 683.0], [73.8, 683.0], [73.9, 684.0], [74.0, 684.0], [74.1, 684.0], [74.2, 684.0], [74.3, 685.0], [74.4, 685.0], [74.5, 685.0], [74.6, 685.0], [74.7, 685.0], [74.8, 685.0], [74.9, 686.0], [75.0, 686.0], [75.1, 686.0], [75.2, 687.0], [75.3, 689.0], [75.4, 690.0], [75.5, 690.0], [75.6, 690.0], [75.7, 690.0], [75.8, 690.0], [75.9, 690.0], [76.0, 692.0], [76.1, 694.0], [76.2, 695.0], [76.3, 695.0], [76.4, 697.0], [76.5, 697.0], [76.6, 697.0], [76.7, 697.0], [76.8, 698.0], [76.9, 699.0], [77.0, 699.0], [77.1, 700.0], [77.2, 700.0], [77.3, 700.0], [77.4, 700.0], [77.5, 702.0], [77.6, 704.0], [77.7, 704.0], [77.8, 704.0], [77.9, 704.0], [78.0, 705.0], [78.1, 706.0], [78.2, 706.0], [78.3, 707.0], [78.4, 707.0], [78.5, 707.0], [78.6, 707.0], [78.7, 708.0], [78.8, 708.0], [78.9, 708.0], [79.0, 709.0], [79.1, 709.0], [79.2, 711.0], [79.3, 711.0], [79.4, 713.0], [79.5, 714.0], [79.6, 714.0], [79.7, 714.0], [79.8, 714.0], [79.9, 715.0], [80.0, 716.0], [80.1, 716.0], [80.2, 723.0], [80.3, 725.0], [80.4, 725.0], [80.5, 726.0], [80.6, 729.0], [80.7, 730.0], [80.8, 730.0], [80.9, 732.0], [81.0, 736.0], [81.1, 736.0], [81.2, 736.0], [81.3, 737.0], [81.4, 738.0], [81.5, 742.0], [81.6, 742.0], [81.7, 742.0], [81.8, 742.0], [81.9, 742.0], [82.0, 744.0], [82.1, 747.0], [82.2, 747.0], [82.3, 747.0], [82.4, 752.0], [82.5, 752.0], [82.6, 760.0], [82.7, 760.0], [82.8, 760.0], [82.9, 761.0], [83.0, 761.0], [83.1, 761.0], [83.2, 762.0], [83.3, 763.0], [83.4, 763.0], [83.5, 763.0], [83.6, 764.0], [83.7, 764.0], [83.8, 764.0], [83.9, 765.0], [84.0, 766.0], [84.1, 766.0], [84.2, 766.0], [84.3, 766.0], [84.4, 768.0], [84.5, 770.0], [84.6, 770.0], [84.7, 770.0], [84.8, 770.0], [84.9, 770.0], [85.0, 770.0], [85.1, 771.0], [85.2, 771.0], [85.3, 771.0], [85.4, 772.0], [85.5, 772.0], [85.6, 772.0], [85.7, 772.0], [85.8, 773.0], [85.9, 774.0], [86.0, 774.0], [86.1, 774.0], [86.2, 775.0], [86.3, 775.0], [86.4, 775.0], [86.5, 775.0], [86.6, 776.0], [86.7, 776.0], [86.8, 776.0], [86.9, 777.0], [87.0, 777.0], [87.1, 779.0], [87.2, 779.0], [87.3, 780.0], [87.4, 781.0], [87.5, 784.0], [87.6, 784.0], [87.7, 785.0], [87.8, 785.0], [87.9, 786.0], [88.0, 786.0], [88.1, 786.0], [88.2, 787.0], [88.3, 790.0], [88.4, 790.0], [88.5, 790.0], [88.6, 790.0], [88.7, 790.0], [88.8, 790.0], [88.9, 791.0], [89.0, 791.0], [89.1, 791.0], [89.2, 792.0], [89.3, 793.0], [89.4, 794.0], [89.5, 794.0], [89.6, 794.0], [89.7, 795.0], [89.8, 796.0], [89.9, 796.0], [90.0, 799.0], [90.1, 799.0], [90.2, 799.0], [90.3, 800.0], [90.4, 800.0], [90.5, 803.0], [90.6, 803.0], [90.7, 803.0], [90.8, 804.0], [90.9, 804.0], [91.0, 804.0], [91.1, 805.0], [91.2, 805.0], [91.3, 808.0], [91.4, 808.0], [91.5, 814.0], [91.6, 816.0], [91.7, 816.0], [91.8, 821.0], [91.9, 822.0], [92.0, 828.0], [92.1, 828.0], [92.2, 833.0], [92.3, 836.0], [92.4, 836.0], [92.5, 836.0], [92.6, 838.0], [92.7, 840.0], [92.8, 846.0], [92.9, 846.0], [93.0, 847.0], [93.1, 847.0], [93.2, 859.0], [93.3, 859.0], [93.4, 859.0], [93.5, 863.0], [93.6, 863.0], [93.7, 870.0], [93.8, 883.0], [93.9, 911.0], [94.0, 911.0], [94.1, 913.0], [94.2, 919.0], [94.3, 922.0], [94.4, 922.0], [94.5, 927.0], [94.6, 928.0], [94.7, 930.0], [94.8, 930.0], [94.9, 931.0], [95.0, 985.0], [95.1, 985.0], [95.2, 995.0], [95.3, 1014.0], [95.4, 1014.0], [95.5, 1014.0], [95.6, 1015.0], [95.7, 1025.0], [95.8, 1029.0], [95.9, 1029.0], [96.0, 1043.0], [96.1, 1044.0], [96.2, 1051.0], [96.3, 1051.0], [96.4, 1054.0], [96.5, 1055.0], [96.6, 1074.0], [96.7, 1074.0], [96.8, 1075.0], [96.9, 1089.0], [97.0, 1089.0], [97.1, 1121.0], [97.2, 1149.0], [97.3, 1171.0], [97.4, 1171.0], [97.5, 1177.0], [97.6, 1203.0], [97.7, 1225.0], [97.8, 1225.0], [97.9, 1239.0], [98.0, 1250.0], [98.1, 1251.0], [98.2, 1251.0], [98.3, 1326.0], [98.4, 1349.0], [98.5, 1349.0], [98.6, 1349.0], [98.7, 1363.0], [98.8, 1525.0], [98.9, 1525.0], [99.0, 1712.0], [99.1, 1801.0], [99.2, 1802.0], [99.3, 1802.0], [99.4, 2591.0], [99.5, 2677.0], [99.6, 2941.0], [99.7, 2941.0], [99.8, 3071.0], [99.9, 3111.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 178.0, "series": [{"data": [[600.0, 123.0], [2500.0, 1.0], [2600.0, 1.0], [700.0, 97.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 1.0], [200.0, 114.0], [800.0, 27.0], [900.0, 10.0], [1000.0, 13.0], [1100.0, 4.0], [300.0, 86.0], [1200.0, 5.0], [1300.0, 4.0], [1500.0, 1.0], [100.0, 18.0], [400.0, 47.0], [1700.0, 1.0], [1800.0, 2.0], [500.0, 178.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 461.0, "series": [{"data": [[0.0, 265.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 461.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.60401408E12, "maxY": 1.0, "series": [{"data": [[1.6040142E12, 1.0], [1.60401438E12, 1.0], [1.60401432E12, 1.0], [1.60401444E12, 1.0], [1.60401414E12, 1.0], [1.60401408E12, 1.0], [1.60401426E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401444E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 567.2367346938777, "minX": 1.0, "maxY": 567.2367346938777, "series": [{"data": [[1.0, 567.2367346938777]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 567.2367346938777]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 681.2666666666667, "minX": 1.60401408E12, "maxY": 386823.5, "series": [{"data": [[1.6040142E12, 210358.78333333333], [1.60401438E12, 217571.73333333334], [1.60401432E12, 223167.3], [1.60401444E12, 251214.0], [1.60401414E12, 205523.21666666667], [1.60401408E12, 386823.5], [1.60401426E12, 341130.9]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6040142E12, 791.1833333333333], [1.60401438E12, 711.0833333333334], [1.60401432E12, 681.2666666666667], [1.60401444E12, 899.6], [1.60401414E12, 688.8333333333334], [1.60401408E12, 756.65], [1.60401426E12, 994.4166666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401444E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 445.9776119402984, "minX": 1.60401408E12, "maxY": 664.3222222222224, "series": [{"data": [[1.6040142E12, 581.3904761904762], [1.60401438E12, 635.7446808510637], [1.60401432E12, 664.3222222222224], [1.60401444E12, 466.495867768595], [1.60401414E12, 658.9120879120878], [1.60401408E12, 601.5600000000001], [1.60401426E12, 445.9776119402984]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401444E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 444.75373134328356, "minX": 1.60401408E12, "maxY": 663.0888888888887, "series": [{"data": [[1.6040142E12, 580.2761904761905], [1.60401438E12, 634.5106382978727], [1.60401432E12, 663.0888888888887], [1.60401444E12, 465.5123966942149], [1.60401414E12, 657.7142857142857], [1.60401408E12, 600.2099999999999], [1.60401426E12, 444.75373134328356]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401444E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.008264462809917356, "minX": 1.60401408E12, "maxY": 0.3099999999999997, "series": [{"data": [[1.6040142E12, 0.04761904761904763], [1.60401438E12, 0.021276595744680857], [1.60401432E12, 0.022222222222222227], [1.60401444E12, 0.008264462809917356], [1.60401414E12, 0.021978021978022], [1.60401408E12, 0.3099999999999997], [1.60401426E12, 0.014925373134328358]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401444E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 180.0, "minX": 1.60401408E12, "maxY": 3111.0, "series": [{"data": [[1.6040142E12, 2591.0], [1.60401438E12, 985.0], [1.60401432E12, 1074.0], [1.60401444E12, 1802.0], [1.60401414E12, 3111.0], [1.60401408E12, 3071.0], [1.60401426E12, 2941.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6040142E12, 260.0], [1.60401438E12, 288.0], [1.60401432E12, 420.0], [1.60401444E12, 204.09799997091292], [1.60401414E12, 411.0], [1.60401408E12, 180.0], [1.60401426E12, 184.2149999678135]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6040142E12, 260.3952000808716], [1.60401438E12, 288.0], [1.60401432E12, 420.0], [1.60401444E12, 204.20780001163482], [1.60401414E12, 411.0], [1.60401408E12, 180.0], [1.60401426E12, 184.3365000128746]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6040142E12, 260.0559998989105], [1.60401438E12, 288.0], [1.60401432E12, 420.0], [1.60401444E12, 204.15899998545646], [1.60401414E12, 411.0], [1.60401408E12, 180.0], [1.60401426E12, 184.28249998390675]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6040142E12, 260.0], [1.60401438E12, 288.0], [1.60401432E12, 420.0], [1.60401444E12, 204.0], [1.60401414E12, 411.0], [1.60401408E12, 180.0], [1.60401426E12, 184.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6040142E12, 553.0], [1.60401438E12, 662.5], [1.60401432E12, 652.0], [1.60401444E12, 354.0], [1.60401414E12, 617.0], [1.60401408E12, 523.0], [1.60401426E12, 310.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401444E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 242.0, "minX": 1.0, "maxY": 708.0, "series": [{"data": [[1.0, 708.0], [2.0, 552.0], [4.0, 264.5], [5.0, 242.0], [3.0, 346.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 242.0, "minX": 1.0, "maxY": 705.0, "series": [{"data": [[1.0, 705.0], [2.0, 551.5], [4.0, 264.5], [5.0, 242.0], [3.0, 345.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60401402E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.6040142E12, 1.75], [1.60401438E12, 1.5666666666666667], [1.60401432E12, 1.5], [1.60401402E12, 0.016666666666666666], [1.60401444E12, 2.0], [1.60401414E12, 1.5166666666666666], [1.60401408E12, 1.6666666666666667], [1.60401426E12, 2.2333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401444E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.60401408E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.6040142E12, 1.75], [1.60401438E12, 1.5666666666666667], [1.60401432E12, 1.5], [1.60401444E12, 2.0166666666666666], [1.60401414E12, 1.5166666666666666], [1.60401408E12, 1.6666666666666667], [1.60401426E12, 2.2333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60401444E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.60401408E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.6040142E12, 1.75], [1.60401438E12, 1.5666666666666667], [1.60401432E12, 1.5], [1.60401444E12, 2.0166666666666666], [1.60401414E12, 1.5166666666666666], [1.60401408E12, 1.6666666666666667], [1.60401426E12, 2.2333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401444E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.60401408E12, "maxY": 2.2333333333333334, "series": [{"data": [[1.6040142E12, 1.75], [1.60401438E12, 1.5666666666666667], [1.60401432E12, 1.5], [1.60401444E12, 2.0166666666666666], [1.60401414E12, 1.5166666666666666], [1.60401408E12, 1.6666666666666667], [1.60401426E12, 2.2333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60401444E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

