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
        data: {"result": {"minY": 166.0, "minX": 0.0, "maxY": 3420.0, "series": [{"data": [[0.0, 166.0], [0.1, 166.0], [0.2, 168.0], [0.3, 171.0], [0.4, 171.0], [0.5, 173.0], [0.6, 180.0], [0.7, 184.0], [0.8, 184.0], [0.9, 186.0], [1.0, 187.0], [1.1, 187.0], [1.2, 187.0], [1.3, 188.0], [1.4, 190.0], [1.5, 193.0], [1.6, 193.0], [1.7, 193.0], [1.8, 193.0], [1.9, 193.0], [2.0, 195.0], [2.1, 195.0], [2.2, 196.0], [2.3, 196.0], [2.4, 196.0], [2.5, 197.0], [2.6, 197.0], [2.7, 197.0], [2.8, 198.0], [2.9, 198.0], [3.0, 198.0], [3.1, 198.0], [3.2, 200.0], [3.3, 200.0], [3.4, 200.0], [3.5, 200.0], [3.6, 201.0], [3.7, 201.0], [3.8, 201.0], [3.9, 203.0], [4.0, 203.0], [4.1, 203.0], [4.2, 203.0], [4.3, 203.0], [4.4, 204.0], [4.5, 204.0], [4.6, 204.0], [4.7, 205.0], [4.8, 206.0], [4.9, 207.0], [5.0, 207.0], [5.1, 207.0], [5.2, 208.0], [5.3, 208.0], [5.4, 209.0], [5.5, 209.0], [5.6, 210.0], [5.7, 210.0], [5.8, 210.0], [5.9, 211.0], [6.0, 212.0], [6.1, 212.0], [6.2, 212.0], [6.3, 212.0], [6.4, 213.0], [6.5, 213.0], [6.6, 214.0], [6.7, 215.0], [6.8, 215.0], [6.9, 215.0], [7.0, 215.0], [7.1, 217.0], [7.2, 217.0], [7.3, 225.0], [7.4, 255.0], [7.5, 255.0], [7.6, 255.0], [7.7, 260.0], [7.8, 267.0], [7.9, 271.0], [8.0, 271.0], [8.1, 271.0], [8.2, 286.0], [8.3, 288.0], [8.4, 288.0], [8.5, 292.0], [8.6, 293.0], [8.7, 293.0], [8.8, 294.0], [8.9, 294.0], [9.0, 294.0], [9.1, 294.0], [9.2, 295.0], [9.3, 300.0], [9.4, 300.0], [9.5, 300.0], [9.6, 301.0], [9.7, 301.0], [9.8, 301.0], [9.9, 301.0], [10.0, 303.0], [10.1, 303.0], [10.2, 303.0], [10.3, 303.0], [10.4, 304.0], [10.5, 304.0], [10.6, 304.0], [10.7, 305.0], [10.8, 306.0], [10.9, 306.0], [11.0, 306.0], [11.1, 307.0], [11.2, 307.0], [11.3, 308.0], [11.4, 308.0], [11.5, 308.0], [11.6, 309.0], [11.7, 309.0], [11.8, 309.0], [11.9, 309.0], [12.0, 310.0], [12.1, 310.0], [12.2, 310.0], [12.3, 311.0], [12.4, 311.0], [12.5, 311.0], [12.6, 312.0], [12.7, 312.0], [12.8, 312.0], [12.9, 312.0], [13.0, 312.0], [13.1, 312.0], [13.2, 312.0], [13.3, 312.0], [13.4, 312.0], [13.5, 313.0], [13.6, 313.0], [13.7, 313.0], [13.8, 313.0], [13.9, 314.0], [14.0, 314.0], [14.1, 314.0], [14.2, 315.0], [14.3, 315.0], [14.4, 315.0], [14.5, 315.0], [14.6, 315.0], [14.7, 315.0], [14.8, 315.0], [14.9, 316.0], [15.0, 317.0], [15.1, 317.0], [15.2, 319.0], [15.3, 319.0], [15.4, 320.0], [15.5, 320.0], [15.6, 320.0], [15.7, 321.0], [15.8, 321.0], [15.9, 321.0], [16.0, 322.0], [16.1, 323.0], [16.2, 323.0], [16.3, 323.0], [16.4, 324.0], [16.5, 324.0], [16.6, 325.0], [16.7, 325.0], [16.8, 328.0], [16.9, 329.0], [17.0, 329.0], [17.1, 330.0], [17.2, 330.0], [17.3, 334.0], [17.4, 334.0], [17.5, 337.0], [17.6, 338.0], [17.7, 342.0], [17.8, 342.0], [17.9, 342.0], [18.0, 344.0], [18.1, 346.0], [18.2, 346.0], [18.3, 351.0], [18.4, 352.0], [18.5, 352.0], [18.6, 352.0], [18.7, 354.0], [18.8, 354.0], [18.9, 354.0], [19.0, 356.0], [19.1, 357.0], [19.2, 358.0], [19.3, 358.0], [19.4, 360.0], [19.5, 360.0], [19.6, 363.0], [19.7, 363.0], [19.8, 365.0], [19.9, 367.0], [20.0, 367.0], [20.1, 367.0], [20.2, 368.0], [20.3, 368.0], [20.4, 368.0], [20.5, 371.0], [20.6, 371.0], [20.7, 377.0], [20.8, 377.0], [20.9, 384.0], [21.0, 395.0], [21.1, 397.0], [21.2, 397.0], [21.3, 400.0], [21.4, 414.0], [21.5, 418.0], [21.6, 418.0], [21.7, 418.0], [21.8, 419.0], [21.9, 419.0], [22.0, 420.0], [22.1, 420.0], [22.2, 422.0], [22.3, 422.0], [22.4, 424.0], [22.5, 424.0], [22.6, 425.0], [22.7, 425.0], [22.8, 426.0], [22.9, 428.0], [23.0, 429.0], [23.1, 429.0], [23.2, 430.0], [23.3, 430.0], [23.4, 430.0], [23.5, 430.0], [23.6, 431.0], [23.7, 432.0], [23.8, 432.0], [23.9, 433.0], [24.0, 435.0], [24.1, 436.0], [24.2, 436.0], [24.3, 437.0], [24.4, 438.0], [24.5, 439.0], [24.6, 439.0], [24.7, 440.0], [24.8, 442.0], [24.9, 445.0], [25.0, 445.0], [25.1, 446.0], [25.2, 448.0], [25.3, 448.0], [25.4, 451.0], [25.5, 452.0], [25.6, 453.0], [25.7, 453.0], [25.8, 455.0], [25.9, 455.0], [26.0, 455.0], [26.1, 455.0], [26.2, 456.0], [26.3, 457.0], [26.4, 459.0], [26.5, 459.0], [26.6, 459.0], [26.7, 459.0], [26.8, 459.0], [26.9, 459.0], [27.0, 461.0], [27.1, 462.0], [27.2, 462.0], [27.3, 463.0], [27.4, 463.0], [27.5, 466.0], [27.6, 466.0], [27.7, 470.0], [27.8, 471.0], [27.9, 471.0], [28.0, 471.0], [28.1, 472.0], [28.2, 472.0], [28.3, 473.0], [28.4, 473.0], [28.5, 476.0], [28.6, 477.0], [28.7, 477.0], [28.8, 479.0], [28.9, 480.0], [29.0, 482.0], [29.1, 482.0], [29.2, 483.0], [29.3, 489.0], [29.4, 494.0], [29.5, 494.0], [29.6, 494.0], [29.7, 501.0], [29.8, 502.0], [29.9, 502.0], [30.0, 503.0], [30.1, 508.0], [30.2, 508.0], [30.3, 512.0], [30.4, 513.0], [30.5, 525.0], [30.6, 525.0], [30.7, 527.0], [30.8, 529.0], [30.9, 529.0], [31.0, 529.0], [31.1, 534.0], [31.2, 536.0], [31.3, 537.0], [31.4, 537.0], [31.5, 538.0], [31.6, 540.0], [31.7, 540.0], [31.8, 541.0], [31.9, 541.0], [32.0, 542.0], [32.1, 542.0], [32.2, 542.0], [32.3, 543.0], [32.4, 544.0], [32.5, 544.0], [32.6, 547.0], [32.7, 547.0], [32.8, 548.0], [32.9, 548.0], [33.0, 550.0], [33.1, 552.0], [33.2, 556.0], [33.3, 556.0], [33.4, 557.0], [33.5, 558.0], [33.6, 558.0], [33.7, 561.0], [33.8, 561.0], [33.9, 562.0], [34.0, 562.0], [34.1, 563.0], [34.2, 565.0], [34.3, 565.0], [34.4, 565.0], [34.5, 567.0], [34.6, 568.0], [34.7, 569.0], [34.8, 569.0], [34.9, 581.0], [35.0, 587.0], [35.1, 587.0], [35.2, 596.0], [35.3, 599.0], [35.4, 608.0], [35.5, 608.0], [35.6, 625.0], [35.7, 637.0], [35.8, 638.0], [35.9, 638.0], [36.0, 642.0], [36.1, 649.0], [36.2, 656.0], [36.3, 656.0], [36.4, 658.0], [36.5, 658.0], [36.6, 658.0], [36.7, 658.0], [36.8, 662.0], [36.9, 663.0], [37.0, 663.0], [37.1, 664.0], [37.2, 664.0], [37.3, 666.0], [37.4, 666.0], [37.5, 667.0], [37.6, 668.0], [37.7, 669.0], [37.8, 669.0], [37.9, 669.0], [38.0, 671.0], [38.1, 673.0], [38.2, 673.0], [38.3, 673.0], [38.4, 674.0], [38.5, 674.0], [38.6, 675.0], [38.7, 675.0], [38.8, 676.0], [38.9, 676.0], [39.0, 676.0], [39.1, 676.0], [39.2, 677.0], [39.3, 677.0], [39.4, 678.0], [39.5, 678.0], [39.6, 678.0], [39.7, 678.0], [39.8, 678.0], [39.9, 679.0], [40.0, 680.0], [40.1, 680.0], [40.2, 680.0], [40.3, 680.0], [40.4, 680.0], [40.5, 681.0], [40.6, 681.0], [40.7, 682.0], [40.8, 682.0], [40.9, 683.0], [41.0, 683.0], [41.1, 683.0], [41.2, 683.0], [41.3, 683.0], [41.4, 684.0], [41.5, 684.0], [41.6, 684.0], [41.7, 684.0], [41.8, 685.0], [41.9, 685.0], [42.0, 685.0], [42.1, 685.0], [42.2, 686.0], [42.3, 686.0], [42.4, 686.0], [42.5, 686.0], [42.6, 687.0], [42.7, 687.0], [42.8, 687.0], [42.9, 688.0], [43.0, 688.0], [43.1, 688.0], [43.2, 688.0], [43.3, 690.0], [43.4, 690.0], [43.5, 690.0], [43.6, 690.0], [43.7, 691.0], [43.8, 691.0], [43.9, 691.0], [44.0, 692.0], [44.1, 693.0], [44.2, 693.0], [44.3, 693.0], [44.4, 693.0], [44.5, 693.0], [44.6, 693.0], [44.7, 693.0], [44.8, 694.0], [44.9, 695.0], [45.0, 695.0], [45.1, 695.0], [45.2, 695.0], [45.3, 695.0], [45.4, 695.0], [45.5, 696.0], [45.6, 696.0], [45.7, 696.0], [45.8, 698.0], [45.9, 698.0], [46.0, 698.0], [46.1, 698.0], [46.2, 698.0], [46.3, 698.0], [46.4, 698.0], [46.5, 698.0], [46.6, 698.0], [46.7, 699.0], [46.8, 699.0], [46.9, 699.0], [47.0, 699.0], [47.1, 699.0], [47.2, 699.0], [47.3, 700.0], [47.4, 700.0], [47.5, 700.0], [47.6, 700.0], [47.7, 701.0], [47.8, 701.0], [47.9, 701.0], [48.0, 701.0], [48.1, 702.0], [48.2, 702.0], [48.3, 703.0], [48.4, 703.0], [48.5, 703.0], [48.6, 703.0], [48.7, 703.0], [48.8, 703.0], [48.9, 704.0], [49.0, 704.0], [49.1, 704.0], [49.2, 704.0], [49.3, 704.0], [49.4, 705.0], [49.5, 705.0], [49.6, 707.0], [49.7, 707.0], [49.8, 708.0], [49.9, 708.0], [50.0, 708.0], [50.1, 708.0], [50.2, 708.0], [50.3, 708.0], [50.4, 708.0], [50.5, 708.0], [50.6, 708.0], [50.7, 709.0], [50.8, 709.0], [50.9, 710.0], [51.0, 710.0], [51.1, 710.0], [51.2, 710.0], [51.3, 711.0], [51.4, 711.0], [51.5, 712.0], [51.6, 712.0], [51.7, 712.0], [51.8, 713.0], [51.9, 713.0], [52.0, 714.0], [52.1, 714.0], [52.2, 716.0], [52.3, 717.0], [52.4, 721.0], [52.5, 721.0], [52.6, 721.0], [52.7, 723.0], [52.8, 724.0], [52.9, 724.0], [53.0, 724.0], [53.1, 725.0], [53.2, 725.0], [53.3, 725.0], [53.4, 725.0], [53.5, 727.0], [53.6, 727.0], [53.7, 727.0], [53.8, 728.0], [53.9, 728.0], [54.0, 728.0], [54.1, 728.0], [54.2, 729.0], [54.3, 729.0], [54.4, 729.0], [54.5, 730.0], [54.6, 732.0], [54.7, 733.0], [54.8, 733.0], [54.9, 735.0], [55.0, 735.0], [55.1, 735.0], [55.2, 735.0], [55.3, 736.0], [55.4, 736.0], [55.5, 736.0], [55.6, 736.0], [55.7, 738.0], [55.8, 739.0], [55.9, 739.0], [56.0, 740.0], [56.1, 741.0], [56.2, 741.0], [56.3, 741.0], [56.4, 742.0], [56.5, 742.0], [56.6, 742.0], [56.7, 742.0], [56.8, 743.0], [56.9, 743.0], [57.0, 743.0], [57.1, 743.0], [57.2, 743.0], [57.3, 745.0], [57.4, 745.0], [57.5, 746.0], [57.6, 747.0], [57.7, 748.0], [57.8, 748.0], [57.9, 748.0], [58.0, 754.0], [58.1, 756.0], [58.2, 756.0], [58.3, 756.0], [58.4, 757.0], [58.5, 757.0], [58.6, 757.0], [58.7, 758.0], [58.8, 759.0], [58.9, 759.0], [59.0, 759.0], [59.1, 762.0], [59.2, 768.0], [59.3, 768.0], [59.4, 768.0], [59.5, 769.0], [59.6, 770.0], [59.7, 770.0], [59.8, 771.0], [59.9, 775.0], [60.0, 776.0], [60.1, 776.0], [60.2, 776.0], [60.3, 780.0], [60.4, 780.0], [60.5, 781.0], [60.6, 782.0], [60.7, 786.0], [60.8, 786.0], [60.9, 786.0], [61.0, 787.0], [61.1, 787.0], [61.2, 787.0], [61.3, 788.0], [61.4, 791.0], [61.5, 791.0], [61.6, 791.0], [61.7, 793.0], [61.8, 793.0], [61.9, 793.0], [62.0, 797.0], [62.1, 798.0], [62.2, 800.0], [62.3, 800.0], [62.4, 801.0], [62.5, 801.0], [62.6, 810.0], [62.7, 810.0], [62.8, 810.0], [62.9, 813.0], [63.0, 814.0], [63.1, 814.0], [63.2, 814.0], [63.3, 816.0], [63.4, 816.0], [63.5, 816.0], [63.6, 816.0], [63.7, 817.0], [63.8, 817.0], [63.9, 817.0], [64.0, 819.0], [64.1, 819.0], [64.2, 819.0], [64.3, 820.0], [64.4, 820.0], [64.5, 821.0], [64.6, 821.0], [64.7, 821.0], [64.8, 823.0], [64.9, 825.0], [65.0, 825.0], [65.1, 825.0], [65.2, 826.0], [65.3, 826.0], [65.4, 826.0], [65.5, 829.0], [65.6, 830.0], [65.7, 830.0], [65.8, 831.0], [65.9, 831.0], [66.0, 831.0], [66.1, 831.0], [66.2, 831.0], [66.3, 831.0], [66.4, 834.0], [66.5, 834.0], [66.6, 834.0], [66.7, 835.0], [66.8, 835.0], [66.9, 836.0], [67.0, 836.0], [67.1, 836.0], [67.2, 836.0], [67.3, 836.0], [67.4, 836.0], [67.5, 838.0], [67.6, 838.0], [67.7, 839.0], [67.8, 839.0], [67.9, 840.0], [68.0, 840.0], [68.1, 842.0], [68.2, 844.0], [68.3, 845.0], [68.4, 845.0], [68.5, 847.0], [68.6, 847.0], [68.7, 847.0], [68.8, 847.0], [68.9, 848.0], [69.0, 848.0], [69.1, 848.0], [69.2, 848.0], [69.3, 849.0], [69.4, 850.0], [69.5, 850.0], [69.6, 850.0], [69.7, 851.0], [69.8, 853.0], [69.9, 853.0], [70.0, 854.0], [70.1, 855.0], [70.2, 855.0], [70.3, 858.0], [70.4, 858.0], [70.5, 858.0], [70.6, 858.0], [70.7, 859.0], [70.8, 859.0], [70.9, 860.0], [71.0, 860.0], [71.1, 862.0], [71.2, 862.0], [71.3, 863.0], [71.4, 863.0], [71.5, 863.0], [71.6, 864.0], [71.7, 864.0], [71.8, 864.0], [71.9, 866.0], [72.0, 866.0], [72.1, 866.0], [72.2, 866.0], [72.3, 867.0], [72.4, 869.0], [72.5, 869.0], [72.6, 869.0], [72.7, 870.0], [72.8, 870.0], [72.9, 870.0], [73.0, 870.0], [73.1, 871.0], [73.2, 871.0], [73.3, 871.0], [73.4, 874.0], [73.5, 874.0], [73.6, 874.0], [73.7, 874.0], [73.8, 875.0], [73.9, 876.0], [74.0, 876.0], [74.1, 876.0], [74.2, 876.0], [74.3, 878.0], [74.4, 878.0], [74.5, 879.0], [74.6, 880.0], [74.7, 881.0], [74.8, 881.0], [74.9, 881.0], [75.0, 882.0], [75.1, 882.0], [75.2, 882.0], [75.3, 883.0], [75.4, 883.0], [75.5, 883.0], [75.6, 889.0], [75.7, 889.0], [75.8, 890.0], [75.9, 890.0], [76.0, 892.0], [76.1, 892.0], [76.2, 893.0], [76.3, 893.0], [76.4, 894.0], [76.5, 896.0], [76.6, 896.0], [76.7, 896.0], [76.8, 896.0], [76.9, 896.0], [77.0, 896.0], [77.1, 896.0], [77.2, 897.0], [77.3, 899.0], [77.4, 899.0], [77.5, 902.0], [77.6, 903.0], [77.7, 903.0], [77.8, 903.0], [77.9, 909.0], [78.0, 909.0], [78.1, 910.0], [78.2, 910.0], [78.3, 911.0], [78.4, 913.0], [78.5, 913.0], [78.6, 914.0], [78.7, 916.0], [78.8, 916.0], [78.9, 916.0], [79.0, 918.0], [79.1, 919.0], [79.2, 920.0], [79.3, 920.0], [79.4, 920.0], [79.5, 923.0], [79.6, 923.0], [79.7, 923.0], [79.8, 924.0], [79.9, 928.0], [80.0, 928.0], [80.1, 928.0], [80.2, 930.0], [80.3, 932.0], [80.4, 932.0], [80.5, 932.0], [80.6, 935.0], [80.7, 937.0], [80.8, 937.0], [80.9, 942.0], [81.0, 944.0], [81.1, 944.0], [81.2, 944.0], [81.3, 946.0], [81.4, 946.0], [81.5, 949.0], [81.6, 949.0], [81.7, 950.0], [81.8, 951.0], [81.9, 951.0], [82.0, 951.0], [82.1, 952.0], [82.2, 955.0], [82.3, 955.0], [82.4, 955.0], [82.5, 956.0], [82.6, 957.0], [82.7, 957.0], [82.8, 957.0], [82.9, 958.0], [83.0, 959.0], [83.1, 959.0], [83.2, 959.0], [83.3, 960.0], [83.4, 960.0], [83.5, 961.0], [83.6, 963.0], [83.7, 966.0], [83.8, 966.0], [83.9, 967.0], [84.0, 968.0], [84.1, 969.0], [84.2, 969.0], [84.3, 971.0], [84.4, 971.0], [84.5, 974.0], [84.6, 974.0], [84.7, 974.0], [84.8, 975.0], [84.9, 976.0], [85.0, 976.0], [85.1, 977.0], [85.2, 978.0], [85.3, 978.0], [85.4, 979.0], [85.5, 984.0], [85.6, 985.0], [85.7, 985.0], [85.8, 986.0], [85.9, 988.0], [86.0, 989.0], [86.1, 989.0], [86.2, 991.0], [86.3, 992.0], [86.4, 993.0], [86.5, 993.0], [86.6, 995.0], [86.7, 996.0], [86.8, 996.0], [86.9, 1000.0], [87.0, 1002.0], [87.1, 1002.0], [87.2, 1002.0], [87.3, 1005.0], [87.4, 1006.0], [87.5, 1006.0], [87.6, 1006.0], [87.7, 1008.0], [87.8, 1008.0], [87.9, 1009.0], [88.0, 1009.0], [88.1, 1009.0], [88.2, 1016.0], [88.3, 1016.0], [88.4, 1016.0], [88.5, 1023.0], [88.6, 1029.0], [88.7, 1029.0], [88.8, 1030.0], [88.9, 1031.0], [89.0, 1033.0], [89.1, 1033.0], [89.2, 1033.0], [89.3, 1035.0], [89.4, 1037.0], [89.5, 1037.0], [89.6, 1039.0], [89.7, 1047.0], [89.8, 1052.0], [89.9, 1052.0], [90.0, 1057.0], [90.1, 1058.0], [90.2, 1058.0], [90.3, 1060.0], [90.4, 1063.0], [90.5, 1066.0], [90.6, 1066.0], [90.7, 1067.0], [90.8, 1069.0], [90.9, 1073.0], [91.0, 1073.0], [91.1, 1074.0], [91.2, 1075.0], [91.3, 1077.0], [91.4, 1077.0], [91.5, 1079.0], [91.6, 1083.0], [91.7, 1083.0], [91.8, 1087.0], [91.9, 1089.0], [92.0, 1095.0], [92.1, 1095.0], [92.2, 1099.0], [92.3, 1108.0], [92.4, 1108.0], [92.5, 1108.0], [92.6, 1108.0], [92.7, 1122.0], [92.8, 1132.0], [92.9, 1132.0], [93.0, 1134.0], [93.1, 1137.0], [93.2, 1137.0], [93.3, 1137.0], [93.4, 1138.0], [93.5, 1140.0], [93.6, 1140.0], [93.7, 1148.0], [93.8, 1173.0], [93.9, 1176.0], [94.0, 1176.0], [94.1, 1190.0], [94.2, 1198.0], [94.3, 1202.0], [94.4, 1202.0], [94.5, 1209.0], [94.6, 1220.0], [94.7, 1232.0], [94.8, 1232.0], [94.9, 1236.0], [95.0, 1240.0], [95.1, 1240.0], [95.2, 1261.0], [95.3, 1269.0], [95.4, 1275.0], [95.5, 1275.0], [95.6, 1281.0], [95.7, 1290.0], [95.8, 1293.0], [95.9, 1293.0], [96.0, 1297.0], [96.1, 1298.0], [96.2, 1315.0], [96.3, 1315.0], [96.4, 1335.0], [96.5, 1348.0], [96.6, 1362.0], [96.7, 1362.0], [96.8, 1362.0], [96.9, 1378.0], [97.0, 1378.0], [97.1, 1403.0], [97.2, 1438.0], [97.3, 1477.0], [97.4, 1477.0], [97.5, 1484.0], [97.6, 1525.0], [97.7, 1595.0], [97.8, 1595.0], [97.9, 1631.0], [98.0, 1649.0], [98.1, 1663.0], [98.2, 1663.0], [98.3, 1727.0], [98.4, 1821.0], [98.5, 1821.0], [98.6, 1873.0], [98.7, 1965.0], [98.8, 2134.0], [98.9, 2134.0], [99.0, 2356.0], [99.1, 2481.0], [99.2, 2872.0], [99.3, 2872.0], [99.4, 3013.0], [99.5, 3135.0], [99.6, 3157.0], [99.7, 3157.0], [99.8, 3183.0], [99.9, 3420.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 112.0, "series": [{"data": [[600.0, 87.0], [700.0, 110.0], [800.0, 112.0], [900.0, 69.0], [1000.0, 40.0], [1100.0, 15.0], [1200.0, 14.0], [1300.0, 6.0], [1400.0, 4.0], [1500.0, 2.0], [100.0, 23.0], [1600.0, 3.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 1.0], [2100.0, 1.0], [2300.0, 1.0], [2400.0, 1.0], [2800.0, 1.0], [3000.0, 1.0], [3100.0, 3.0], [200.0, 45.0], [3400.0, 1.0], [300.0, 88.0], [400.0, 62.0], [500.0, 42.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 499.0, "series": [{"data": [[0.0, 218.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 499.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 18.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60401306E12, "maxY": 1.0, "series": [{"data": [[1.60401324E12, 1.0], [1.60401342E12, 1.0], [1.60401336E12, 1.0], [1.60401306E12, 1.0], [1.60401354E12, 1.0], [1.60401348E12, 1.0], [1.60401318E12, 1.0], [1.60401312E12, 1.0], [1.6040136E12, 1.0], [1.6040133E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040136E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 717.2108843537424, "minX": 1.0, "maxY": 717.2108843537424, "series": [{"data": [[1.0, 717.2108843537424]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 717.2108843537424]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 243.01666666666668, "minX": 1.60401306E12, "maxY": 269255.45, "series": [{"data": [[1.60401324E12, 162898.98333333334], [1.60401342E12, 165523.1], [1.60401336E12, 248205.83333333334], [1.60401306E12, 133841.81666666668], [1.60401354E12, 169355.63333333333], [1.60401348E12, 174241.0], [1.60401318E12, 159023.33333333334], [1.60401312E12, 269255.45], [1.6040136E12, 127582.73333333334], [1.6040133E12, 225842.06666666668]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60401324E12, 521.4833333333333], [1.60401342E12, 545.2666666666667], [1.60401336E12, 636.2333333333333], [1.60401306E12, 243.01666666666668], [1.60401354E12, 715.3833333333333], [1.60401348E12, 560.1], [1.60401318E12, 529.2166666666667], [1.60401312E12, 575.0166666666667], [1.6040136E12, 342.75], [1.6040133E12, 854.5666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040136E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 520.0086956521741, "minX": 1.60401306E12, "maxY": 875.6521739130433, "series": [{"data": [[1.60401324E12, 875.6521739130433], [1.60401342E12, 836.0972222222222], [1.60401336E12, 697.1294117647057], [1.60401306E12, 724.3749999999998], [1.60401354E12, 633.3578947368422], [1.60401348E12, 809.5405405405405], [1.60401318E12, 852.8], [1.60401312E12, 784.9473684210525], [1.6040136E12, 529.0851063829788], [1.6040133E12, 520.0086956521741]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040136E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 518.939130434783, "minX": 1.60401306E12, "maxY": 874.2028985507245, "series": [{"data": [[1.60401324E12, 874.2028985507245], [1.60401342E12, 834.861111111111], [1.60401336E12, 695.7294117647057], [1.60401306E12, 723.03125], [1.60401354E12, 632.4736842105264], [1.60401348E12, 808.3648648648649], [1.60401318E12, 851.4142857142857], [1.60401312E12, 783.5000000000001], [1.6040136E12, 527.8510638297873], [1.6040133E12, 518.939130434783]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040136E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60401306E12, "maxY": 0.9687499999999999, "series": [{"data": [[1.60401324E12, 0.028985507246376812], [1.60401342E12, 0.02777777777777778], [1.60401336E12, 0.023529411764705885], [1.60401306E12, 0.9687499999999999], [1.60401354E12, 0.031578947368421054], [1.60401348E12, 0.040540540540540536], [1.60401318E12, 0.042857142857142864], [1.60401312E12, 0.026315789473684213], [1.6040136E12, 0.0], [1.6040133E12, 0.017391304347826087]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040136E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 166.0, "minX": 1.60401306E12, "maxY": 3420.0, "series": [{"data": [[1.60401324E12, 3157.0], [1.60401342E12, 1315.0], [1.60401336E12, 3183.0], [1.60401306E12, 3135.0], [1.60401354E12, 2134.0], [1.60401348E12, 1173.0], [1.60401318E12, 2872.0], [1.60401312E12, 3420.0], [1.6040136E12, 1595.0], [1.6040133E12, 2481.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60401324E12, 663.0], [1.60401342E12, 599.0], [1.60401336E12, 171.0], [1.60401306E12, 196.0], [1.60401354E12, 200.0], [1.60401348E12, 314.0], [1.60401318E12, 471.0], [1.60401312E12, 187.0], [1.6040136E12, 212.0], [1.6040133E12, 166.08799994468689]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60401324E12, 663.0], [1.60401342E12, 599.0], [1.60401336E12, 171.0], [1.60401306E12, 196.0], [1.60401354E12, 200.0], [1.60401348E12, 314.0], [1.60401318E12, 471.0], [1.60401312E12, 187.0], [1.6040136E12, 212.0], [1.6040133E12, 166.29680002212524]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60401324E12, 663.0], [1.60401342E12, 599.0], [1.60401336E12, 171.0], [1.60401306E12, 196.0], [1.60401354E12, 200.0], [1.60401348E12, 314.0], [1.60401318E12, 471.0], [1.60401312E12, 187.0], [1.6040136E12, 212.0], [1.6040133E12, 166.20399997234344]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60401324E12, 663.0], [1.60401342E12, 599.0], [1.60401336E12, 171.0], [1.60401306E12, 196.0], [1.60401354E12, 200.0], [1.60401348E12, 314.0], [1.60401318E12, 471.0], [1.60401312E12, 187.0], [1.6040136E12, 212.0], [1.6040133E12, 166.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60401324E12, 847.0], [1.60401342E12, 827.5], [1.60401336E12, 561.0], [1.60401306E12, 561.5], [1.60401354E12, 671.0], [1.60401348E12, 804.5], [1.60401318E12, 804.0], [1.60401312E12, 723.0], [1.6040136E12, 320.0], [1.6040133E12, 395.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040136E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 178.5, "minX": 1.0, "maxY": 864.0, "series": [{"data": [[1.0, 864.0], [2.0, 687.5], [4.0, 210.5], [5.0, 209.0], [3.0, 321.5], [6.0, 178.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 178.5, "minX": 1.0, "maxY": 862.5, "series": [{"data": [[1.0, 862.5], [2.0, 687.5], [4.0, 210.5], [5.0, 209.0], [3.0, 321.5], [6.0, 178.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.55, "minX": 1.60401306E12, "maxY": 1.9166666666666667, "series": [{"data": [[1.60401324E12, 1.15], [1.60401342E12, 1.2], [1.60401336E12, 1.4166666666666667], [1.60401306E12, 0.55], [1.60401354E12, 1.5833333333333333], [1.60401348E12, 1.2333333333333334], [1.60401318E12, 1.1666666666666667], [1.60401312E12, 1.2666666666666666], [1.6040136E12, 0.7666666666666667], [1.6040133E12, 1.9166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040136E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60401306E12, "maxY": 1.9166666666666667, "series": [{"data": [[1.60401324E12, 1.15], [1.60401342E12, 1.2], [1.60401336E12, 1.4166666666666667], [1.60401306E12, 0.5333333333333333], [1.60401354E12, 1.5833333333333333], [1.60401348E12, 1.2333333333333334], [1.60401318E12, 1.1666666666666667], [1.60401312E12, 1.2666666666666666], [1.6040136E12, 0.7833333333333333], [1.6040133E12, 1.9166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6040136E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60401306E12, "maxY": 1.9166666666666667, "series": [{"data": [[1.60401324E12, 1.15], [1.60401342E12, 1.2], [1.60401336E12, 1.4166666666666667], [1.60401306E12, 0.5333333333333333], [1.60401354E12, 1.5833333333333333], [1.60401348E12, 1.2333333333333334], [1.60401318E12, 1.1666666666666667], [1.60401312E12, 1.2666666666666666], [1.6040136E12, 0.7833333333333333], [1.6040133E12, 1.9166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040136E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.5333333333333333, "minX": 1.60401306E12, "maxY": 1.9166666666666667, "series": [{"data": [[1.60401324E12, 1.15], [1.60401342E12, 1.2], [1.60401336E12, 1.4166666666666667], [1.60401306E12, 0.5333333333333333], [1.60401354E12, 1.5833333333333333], [1.60401348E12, 1.2333333333333334], [1.60401318E12, 1.1666666666666667], [1.60401312E12, 1.2666666666666666], [1.6040136E12, 0.7833333333333333], [1.6040133E12, 1.9166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6040136E12, "title": "Total Transactions Per Second"}},
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

