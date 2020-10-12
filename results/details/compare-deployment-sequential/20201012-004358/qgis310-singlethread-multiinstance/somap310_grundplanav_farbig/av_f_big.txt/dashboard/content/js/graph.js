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
        data: {"result": {"minY": 160.0, "minX": 0.0, "maxY": 3318.0, "series": [{"data": [[0.0, 160.0], [0.1, 160.0], [0.2, 164.0], [0.3, 177.0], [0.4, 177.0], [0.5, 184.0], [0.6, 185.0], [0.7, 185.0], [0.8, 185.0], [0.9, 186.0], [1.0, 186.0], [1.1, 186.0], [1.2, 186.0], [1.3, 189.0], [1.4, 189.0], [1.5, 189.0], [1.6, 189.0], [1.7, 190.0], [1.8, 191.0], [1.9, 191.0], [2.0, 191.0], [2.1, 193.0], [2.2, 193.0], [2.3, 193.0], [2.4, 194.0], [2.5, 195.0], [2.6, 195.0], [2.7, 195.0], [2.8, 196.0], [2.9, 196.0], [3.0, 197.0], [3.1, 197.0], [3.2, 197.0], [3.3, 197.0], [3.4, 197.0], [3.5, 199.0], [3.6, 199.0], [3.7, 199.0], [3.8, 199.0], [3.9, 200.0], [4.0, 201.0], [4.1, 201.0], [4.2, 201.0], [4.3, 202.0], [4.4, 202.0], [4.5, 203.0], [4.6, 203.0], [4.7, 203.0], [4.8, 205.0], [4.9, 206.0], [5.0, 206.0], [5.1, 206.0], [5.2, 208.0], [5.3, 208.0], [5.4, 209.0], [5.5, 211.0], [5.6, 211.0], [5.7, 211.0], [5.8, 212.0], [5.9, 212.0], [6.0, 213.0], [6.1, 213.0], [6.2, 215.0], [6.3, 215.0], [6.4, 216.0], [6.5, 216.0], [6.6, 220.0], [6.7, 221.0], [6.8, 221.0], [6.9, 222.0], [7.0, 225.0], [7.1, 225.0], [7.2, 225.0], [7.3, 229.0], [7.4, 230.0], [7.5, 234.0], [7.6, 234.0], [7.7, 235.0], [7.8, 277.0], [7.9, 278.0], [8.0, 278.0], [8.1, 284.0], [8.2, 284.0], [8.3, 285.0], [8.4, 285.0], [8.5, 286.0], [8.6, 286.0], [8.7, 286.0], [8.8, 289.0], [8.9, 290.0], [9.0, 290.0], [9.1, 290.0], [9.2, 291.0], [9.3, 292.0], [9.4, 293.0], [9.5, 293.0], [9.6, 294.0], [9.7, 294.0], [9.8, 295.0], [9.9, 295.0], [10.0, 296.0], [10.1, 296.0], [10.2, 296.0], [10.3, 297.0], [10.4, 297.0], [10.5, 298.0], [10.6, 298.0], [10.7, 299.0], [10.8, 299.0], [10.9, 300.0], [11.0, 300.0], [11.1, 300.0], [11.2, 301.0], [11.3, 301.0], [11.4, 301.0], [11.5, 302.0], [11.6, 303.0], [11.7, 303.0], [11.8, 304.0], [11.9, 304.0], [12.0, 304.0], [12.1, 304.0], [12.2, 305.0], [12.3, 305.0], [12.4, 305.0], [12.5, 305.0], [12.6, 305.0], [12.7, 306.0], [12.8, 306.0], [12.9, 306.0], [13.0, 307.0], [13.1, 307.0], [13.2, 307.0], [13.3, 307.0], [13.4, 308.0], [13.5, 308.0], [13.6, 308.0], [13.7, 309.0], [13.8, 310.0], [13.9, 310.0], [14.0, 310.0], [14.1, 310.0], [14.2, 310.0], [14.3, 310.0], [14.4, 310.0], [14.5, 311.0], [14.6, 311.0], [14.7, 312.0], [14.8, 312.0], [14.9, 313.0], [15.0, 313.0], [15.1, 313.0], [15.2, 314.0], [15.3, 315.0], [15.4, 315.0], [15.5, 315.0], [15.6, 320.0], [15.7, 321.0], [15.8, 324.0], [15.9, 324.0], [16.0, 324.0], [16.1, 325.0], [16.2, 326.0], [16.3, 326.0], [16.4, 327.0], [16.5, 328.0], [16.6, 328.0], [16.7, 328.0], [16.8, 330.0], [16.9, 330.0], [17.0, 330.0], [17.1, 333.0], [17.2, 334.0], [17.3, 334.0], [17.4, 334.0], [17.5, 335.0], [17.6, 336.0], [17.7, 340.0], [17.8, 340.0], [17.9, 340.0], [18.0, 341.0], [18.1, 342.0], [18.2, 342.0], [18.3, 343.0], [18.4, 344.0], [18.5, 344.0], [18.6, 345.0], [18.7, 346.0], [18.8, 349.0], [18.9, 349.0], [19.0, 351.0], [19.1, 352.0], [19.2, 353.0], [19.3, 353.0], [19.4, 353.0], [19.5, 353.0], [19.6, 357.0], [19.7, 357.0], [19.8, 358.0], [19.9, 359.0], [20.0, 359.0], [20.1, 359.0], [20.2, 359.0], [20.3, 359.0], [20.4, 359.0], [20.5, 360.0], [20.6, 366.0], [20.7, 368.0], [20.8, 368.0], [20.9, 375.0], [21.0, 376.0], [21.1, 376.0], [21.2, 376.0], [21.3, 381.0], [21.4, 392.0], [21.5, 393.0], [21.6, 393.0], [21.7, 396.0], [21.8, 396.0], [21.9, 396.0], [22.0, 398.0], [22.1, 404.0], [22.2, 408.0], [22.3, 408.0], [22.4, 410.0], [22.5, 412.0], [22.6, 414.0], [22.7, 414.0], [22.8, 415.0], [22.9, 416.0], [23.0, 416.0], [23.1, 416.0], [23.2, 417.0], [23.3, 418.0], [23.4, 418.0], [23.5, 418.0], [23.6, 419.0], [23.7, 420.0], [23.8, 420.0], [23.9, 420.0], [24.0, 421.0], [24.1, 422.0], [24.2, 422.0], [24.3, 422.0], [24.4, 422.0], [24.5, 424.0], [24.6, 424.0], [24.7, 424.0], [24.8, 424.0], [24.9, 425.0], [25.0, 425.0], [25.1, 425.0], [25.2, 425.0], [25.3, 425.0], [25.4, 425.0], [25.5, 425.0], [25.6, 426.0], [25.7, 426.0], [25.8, 427.0], [25.9, 428.0], [26.0, 428.0], [26.1, 428.0], [26.2, 429.0], [26.3, 429.0], [26.4, 430.0], [26.5, 430.0], [26.6, 430.0], [26.7, 431.0], [26.8, 431.0], [26.9, 432.0], [27.0, 433.0], [27.1, 436.0], [27.2, 436.0], [27.3, 436.0], [27.4, 438.0], [27.5, 439.0], [27.6, 439.0], [27.7, 440.0], [27.8, 441.0], [27.9, 442.0], [28.0, 442.0], [28.1, 444.0], [28.2, 444.0], [28.3, 444.0], [28.4, 444.0], [28.5, 445.0], [28.6, 447.0], [28.7, 447.0], [28.8, 450.0], [28.9, 451.0], [29.0, 452.0], [29.1, 452.0], [29.2, 453.0], [29.3, 457.0], [29.4, 459.0], [29.5, 459.0], [29.6, 466.0], [29.7, 467.0], [29.8, 468.0], [29.9, 468.0], [30.0, 468.0], [30.1, 472.0], [30.2, 472.0], [30.3, 479.0], [30.4, 499.0], [30.5, 502.0], [30.6, 502.0], [30.7, 503.0], [30.8, 508.0], [30.9, 512.0], [31.0, 512.0], [31.1, 514.0], [31.2, 514.0], [31.3, 514.0], [31.4, 514.0], [31.5, 521.0], [31.6, 522.0], [31.7, 522.0], [31.8, 525.0], [31.9, 526.0], [32.0, 527.0], [32.1, 527.0], [32.2, 527.0], [32.3, 528.0], [32.4, 531.0], [32.5, 531.0], [32.6, 531.0], [32.7, 535.0], [32.8, 537.0], [32.9, 537.0], [33.0, 538.0], [33.1, 538.0], [33.2, 540.0], [33.3, 540.0], [33.4, 541.0], [33.5, 542.0], [33.6, 542.0], [33.7, 542.0], [33.8, 542.0], [33.9, 543.0], [34.0, 543.0], [34.1, 544.0], [34.2, 545.0], [34.3, 547.0], [34.4, 547.0], [34.5, 548.0], [34.6, 549.0], [34.7, 552.0], [34.8, 552.0], [34.9, 553.0], [35.0, 553.0], [35.1, 553.0], [35.2, 554.0], [35.3, 557.0], [35.4, 573.0], [35.5, 573.0], [35.6, 573.0], [35.7, 576.0], [35.8, 587.0], [35.9, 587.0], [36.0, 626.0], [36.1, 636.0], [36.2, 637.0], [36.3, 637.0], [36.4, 639.0], [36.5, 639.0], [36.6, 641.0], [36.7, 641.0], [36.8, 642.0], [36.9, 643.0], [37.0, 643.0], [37.1, 645.0], [37.2, 645.0], [37.3, 647.0], [37.4, 647.0], [37.5, 647.0], [37.6, 647.0], [37.7, 647.0], [37.8, 647.0], [37.9, 651.0], [38.0, 651.0], [38.1, 652.0], [38.2, 652.0], [38.3, 653.0], [38.4, 653.0], [38.5, 653.0], [38.6, 654.0], [38.7, 654.0], [38.8, 654.0], [38.9, 654.0], [39.0, 654.0], [39.1, 657.0], [39.2, 658.0], [39.3, 658.0], [39.4, 658.0], [39.5, 659.0], [39.6, 659.0], [39.7, 659.0], [39.8, 659.0], [39.9, 660.0], [40.0, 661.0], [40.1, 661.0], [40.2, 661.0], [40.3, 661.0], [40.4, 661.0], [40.5, 662.0], [40.6, 662.0], [40.7, 662.0], [40.8, 662.0], [40.9, 662.0], [41.0, 663.0], [41.1, 663.0], [41.2, 663.0], [41.3, 663.0], [41.4, 663.0], [41.5, 664.0], [41.6, 664.0], [41.7, 664.0], [41.8, 664.0], [41.9, 664.0], [42.0, 665.0], [42.1, 665.0], [42.2, 665.0], [42.3, 665.0], [42.4, 665.0], [42.5, 665.0], [42.6, 666.0], [42.7, 666.0], [42.8, 666.0], [42.9, 666.0], [43.0, 667.0], [43.1, 667.0], [43.2, 667.0], [43.3, 668.0], [43.4, 668.0], [43.5, 668.0], [43.6, 669.0], [43.7, 669.0], [43.8, 669.0], [43.9, 669.0], [44.0, 670.0], [44.1, 670.0], [44.2, 670.0], [44.3, 671.0], [44.4, 671.0], [44.5, 671.0], [44.6, 671.0], [44.7, 671.0], [44.8, 672.0], [44.9, 672.0], [45.0, 672.0], [45.1, 672.0], [45.2, 673.0], [45.3, 673.0], [45.4, 673.0], [45.5, 673.0], [45.6, 673.0], [45.7, 673.0], [45.8, 674.0], [45.9, 674.0], [46.0, 674.0], [46.1, 674.0], [46.2, 675.0], [46.3, 675.0], [46.4, 675.0], [46.5, 675.0], [46.6, 676.0], [46.7, 676.0], [46.8, 676.0], [46.9, 676.0], [47.0, 677.0], [47.1, 677.0], [47.2, 677.0], [47.3, 677.0], [47.4, 677.0], [47.5, 677.0], [47.6, 677.0], [47.7, 677.0], [47.8, 678.0], [47.9, 678.0], [48.0, 678.0], [48.1, 679.0], [48.2, 679.0], [48.3, 680.0], [48.4, 680.0], [48.5, 680.0], [48.6, 680.0], [48.7, 680.0], [48.8, 681.0], [48.9, 681.0], [49.0, 682.0], [49.1, 682.0], [49.2, 682.0], [49.3, 682.0], [49.4, 683.0], [49.5, 683.0], [49.6, 683.0], [49.7, 684.0], [49.8, 684.0], [49.9, 684.0], [50.0, 685.0], [50.1, 685.0], [50.2, 685.0], [50.3, 685.0], [50.4, 686.0], [50.5, 686.0], [50.6, 686.0], [50.7, 687.0], [50.8, 687.0], [50.9, 688.0], [51.0, 688.0], [51.1, 689.0], [51.2, 689.0], [51.3, 689.0], [51.4, 689.0], [51.5, 691.0], [51.6, 691.0], [51.7, 691.0], [51.8, 692.0], [51.9, 693.0], [52.0, 694.0], [52.1, 694.0], [52.2, 694.0], [52.3, 696.0], [52.4, 696.0], [52.5, 696.0], [52.6, 696.0], [52.7, 697.0], [52.8, 697.0], [52.9, 697.0], [53.0, 698.0], [53.1, 700.0], [53.2, 700.0], [53.3, 700.0], [53.4, 701.0], [53.5, 702.0], [53.6, 702.0], [53.7, 702.0], [53.8, 703.0], [53.9, 704.0], [54.0, 704.0], [54.1, 705.0], [54.2, 706.0], [54.3, 706.0], [54.4, 706.0], [54.5, 707.0], [54.6, 708.0], [54.7, 710.0], [54.8, 710.0], [54.9, 711.0], [55.0, 712.0], [55.1, 712.0], [55.2, 712.0], [55.3, 713.0], [55.4, 713.0], [55.5, 713.0], [55.6, 713.0], [55.7, 714.0], [55.8, 714.0], [55.9, 714.0], [56.0, 716.0], [56.1, 718.0], [56.2, 718.0], [56.3, 718.0], [56.4, 718.0], [56.5, 719.0], [56.6, 719.0], [56.7, 719.0], [56.8, 719.0], [56.9, 720.0], [57.0, 720.0], [57.1, 720.0], [57.2, 722.0], [57.3, 722.0], [57.4, 722.0], [57.5, 723.0], [57.6, 725.0], [57.7, 729.0], [57.8, 729.0], [57.9, 733.0], [58.0, 735.0], [58.1, 735.0], [58.2, 735.0], [58.3, 735.0], [58.4, 736.0], [58.5, 736.0], [58.6, 736.0], [58.7, 738.0], [58.8, 739.0], [58.9, 739.0], [59.0, 739.0], [59.1, 740.0], [59.2, 743.0], [59.3, 743.0], [59.4, 745.0], [59.5, 747.0], [59.6, 747.0], [59.7, 747.0], [59.8, 748.0], [59.9, 748.0], [60.0, 749.0], [60.1, 749.0], [60.2, 750.0], [60.3, 751.0], [60.4, 751.0], [60.5, 751.0], [60.6, 752.0], [60.7, 753.0], [60.8, 753.0], [60.9, 753.0], [61.0, 754.0], [61.1, 754.0], [61.2, 754.0], [61.3, 754.0], [61.4, 755.0], [61.5, 757.0], [61.6, 757.0], [61.7, 757.0], [61.8, 760.0], [61.9, 760.0], [62.0, 762.0], [62.1, 762.0], [62.2, 762.0], [62.3, 762.0], [62.4, 762.0], [62.5, 762.0], [62.6, 764.0], [62.7, 764.0], [62.8, 770.0], [62.9, 771.0], [63.0, 776.0], [63.1, 776.0], [63.2, 778.0], [63.3, 782.0], [63.4, 782.0], [63.5, 782.0], [63.6, 783.0], [63.7, 784.0], [63.8, 784.0], [63.9, 791.0], [64.0, 791.0], [64.1, 795.0], [64.2, 795.0], [64.3, 797.0], [64.4, 797.0], [64.5, 799.0], [64.6, 799.0], [64.7, 799.0], [64.8, 800.0], [64.9, 800.0], [65.0, 800.0], [65.1, 801.0], [65.2, 801.0], [65.3, 801.0], [65.4, 802.0], [65.5, 803.0], [65.6, 803.0], [65.7, 803.0], [65.8, 804.0], [65.9, 805.0], [66.0, 806.0], [66.1, 806.0], [66.2, 807.0], [66.3, 808.0], [66.4, 812.0], [66.5, 812.0], [66.6, 812.0], [66.7, 813.0], [66.8, 813.0], [66.9, 813.0], [67.0, 813.0], [67.1, 814.0], [67.2, 814.0], [67.3, 814.0], [67.4, 816.0], [67.5, 816.0], [67.6, 816.0], [67.7, 816.0], [67.8, 816.0], [67.9, 817.0], [68.0, 817.0], [68.1, 817.0], [68.2, 818.0], [68.3, 818.0], [68.4, 818.0], [68.5, 819.0], [68.6, 819.0], [68.7, 819.0], [68.8, 820.0], [68.9, 820.0], [69.0, 820.0], [69.1, 820.0], [69.2, 821.0], [69.3, 822.0], [69.4, 825.0], [69.5, 825.0], [69.6, 825.0], [69.7, 827.0], [69.8, 827.0], [69.9, 827.0], [70.0, 827.0], [70.1, 828.0], [70.2, 828.0], [70.3, 829.0], [70.4, 829.0], [70.5, 829.0], [70.6, 829.0], [70.7, 830.0], [70.8, 831.0], [70.9, 831.0], [71.0, 831.0], [71.1, 832.0], [71.2, 834.0], [71.3, 836.0], [71.4, 836.0], [71.5, 837.0], [71.6, 837.0], [71.7, 837.0], [71.8, 837.0], [71.9, 838.0], [72.0, 839.0], [72.1, 839.0], [72.2, 840.0], [72.3, 840.0], [72.4, 842.0], [72.5, 842.0], [72.6, 842.0], [72.7, 842.0], [72.8, 843.0], [72.9, 843.0], [73.0, 844.0], [73.1, 847.0], [73.2, 847.0], [73.3, 847.0], [73.4, 848.0], [73.5, 849.0], [73.6, 849.0], [73.7, 849.0], [73.8, 849.0], [73.9, 851.0], [74.0, 851.0], [74.1, 851.0], [74.2, 851.0], [74.3, 851.0], [74.4, 851.0], [74.5, 851.0], [74.6, 852.0], [74.7, 853.0], [74.8, 853.0], [74.9, 856.0], [75.0, 858.0], [75.1, 858.0], [75.2, 859.0], [75.3, 860.0], [75.4, 861.0], [75.5, 861.0], [75.6, 866.0], [75.7, 866.0], [75.8, 866.0], [75.9, 866.0], [76.0, 868.0], [76.1, 870.0], [76.2, 871.0], [76.3, 871.0], [76.4, 873.0], [76.5, 873.0], [76.6, 875.0], [76.7, 875.0], [76.8, 876.0], [76.9, 878.0], [77.0, 878.0], [77.1, 879.0], [77.2, 879.0], [77.3, 881.0], [77.4, 881.0], [77.5, 881.0], [77.6, 882.0], [77.7, 883.0], [77.8, 883.0], [77.9, 883.0], [78.0, 883.0], [78.1, 885.0], [78.2, 885.0], [78.3, 890.0], [78.4, 890.0], [78.5, 890.0], [78.6, 890.0], [78.7, 893.0], [78.8, 893.0], [78.9, 893.0], [79.0, 897.0], [79.1, 897.0], [79.2, 898.0], [79.3, 898.0], [79.4, 900.0], [79.5, 901.0], [79.6, 901.0], [79.7, 901.0], [79.8, 901.0], [79.9, 903.0], [80.0, 904.0], [80.1, 904.0], [80.2, 904.0], [80.3, 905.0], [80.4, 905.0], [80.5, 915.0], [80.6, 916.0], [80.7, 917.0], [80.8, 917.0], [80.9, 917.0], [81.0, 921.0], [81.1, 923.0], [81.2, 923.0], [81.3, 925.0], [81.4, 926.0], [81.5, 927.0], [81.6, 927.0], [81.7, 930.0], [81.8, 931.0], [81.9, 931.0], [82.0, 936.0], [82.1, 938.0], [82.2, 940.0], [82.3, 940.0], [82.4, 943.0], [82.5, 944.0], [82.6, 944.0], [82.7, 944.0], [82.8, 945.0], [82.9, 946.0], [83.0, 947.0], [83.1, 947.0], [83.2, 948.0], [83.3, 948.0], [83.4, 948.0], [83.5, 949.0], [83.6, 950.0], [83.7, 951.0], [83.8, 951.0], [83.9, 952.0], [84.0, 953.0], [84.1, 953.0], [84.2, 953.0], [84.3, 956.0], [84.4, 958.0], [84.5, 959.0], [84.6, 959.0], [84.7, 961.0], [84.8, 961.0], [84.9, 963.0], [85.0, 963.0], [85.1, 964.0], [85.2, 969.0], [85.3, 969.0], [85.4, 970.0], [85.5, 971.0], [85.6, 972.0], [85.7, 972.0], [85.8, 972.0], [85.9, 972.0], [86.0, 974.0], [86.1, 974.0], [86.2, 978.0], [86.3, 979.0], [86.4, 982.0], [86.5, 982.0], [86.6, 983.0], [86.7, 985.0], [86.8, 985.0], [86.9, 988.0], [87.0, 990.0], [87.1, 990.0], [87.2, 990.0], [87.3, 990.0], [87.4, 993.0], [87.5, 993.0], [87.6, 993.0], [87.7, 997.0], [87.8, 998.0], [87.9, 999.0], [88.0, 999.0], [88.1, 1000.0], [88.2, 1000.0], [88.3, 1002.0], [88.4, 1002.0], [88.5, 1006.0], [88.6, 1008.0], [88.7, 1008.0], [88.8, 1009.0], [88.9, 1009.0], [89.0, 1010.0], [89.1, 1010.0], [89.2, 1011.0], [89.3, 1014.0], [89.4, 1015.0], [89.5, 1015.0], [89.6, 1018.0], [89.7, 1019.0], [89.8, 1020.0], [89.9, 1020.0], [90.0, 1021.0], [90.1, 1021.0], [90.2, 1021.0], [90.3, 1024.0], [90.4, 1025.0], [90.5, 1026.0], [90.6, 1026.0], [90.7, 1027.0], [90.8, 1030.0], [90.9, 1033.0], [91.0, 1033.0], [91.1, 1034.0], [91.2, 1037.0], [91.3, 1047.0], [91.4, 1047.0], [91.5, 1049.0], [91.6, 1056.0], [91.7, 1056.0], [91.8, 1063.0], [91.9, 1067.0], [92.0, 1069.0], [92.1, 1069.0], [92.2, 1078.0], [92.3, 1090.0], [92.4, 1094.0], [92.5, 1094.0], [92.6, 1108.0], [92.7, 1113.0], [92.8, 1119.0], [92.9, 1119.0], [93.0, 1126.0], [93.1, 1136.0], [93.2, 1141.0], [93.3, 1141.0], [93.4, 1142.0], [93.5, 1144.0], [93.6, 1144.0], [93.7, 1144.0], [93.8, 1146.0], [93.9, 1174.0], [94.0, 1174.0], [94.1, 1179.0], [94.2, 1181.0], [94.3, 1185.0], [94.4, 1185.0], [94.5, 1193.0], [94.6, 1214.0], [94.7, 1218.0], [94.8, 1218.0], [94.9, 1219.0], [95.0, 1239.0], [95.1, 1239.0], [95.2, 1250.0], [95.3, 1259.0], [95.4, 1266.0], [95.5, 1266.0], [95.6, 1281.0], [95.7, 1282.0], [95.8, 1283.0], [95.9, 1283.0], [96.0, 1290.0], [96.1, 1311.0], [96.2, 1316.0], [96.3, 1316.0], [96.4, 1316.0], [96.5, 1317.0], [96.6, 1320.0], [96.7, 1320.0], [96.8, 1326.0], [96.9, 1326.0], [97.0, 1326.0], [97.1, 1351.0], [97.2, 1485.0], [97.3, 1518.0], [97.4, 1518.0], [97.5, 1519.0], [97.6, 1528.0], [97.7, 1552.0], [97.8, 1552.0], [97.9, 1558.0], [98.0, 1562.0], [98.1, 1629.0], [98.2, 1629.0], [98.3, 1714.0], [98.4, 1739.0], [98.5, 1739.0], [98.6, 1960.0], [98.7, 2000.0], [98.8, 2031.0], [98.9, 2031.0], [99.0, 2470.0], [99.1, 2897.0], [99.2, 2925.0], [99.3, 2925.0], [99.4, 3074.0], [99.5, 3108.0], [99.6, 3177.0], [99.7, 3177.0], [99.8, 3313.0], [99.9, 3318.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 126.0, "series": [{"data": [[600.0, 126.0], [700.0, 86.0], [800.0, 107.0], [900.0, 64.0], [1000.0, 33.0], [1100.0, 15.0], [1200.0, 11.0], [1300.0, 8.0], [1400.0, 1.0], [1500.0, 6.0], [100.0, 28.0], [1600.0, 1.0], [1700.0, 2.0], [1900.0, 1.0], [2000.0, 2.0], [2400.0, 1.0], [2800.0, 1.0], [2900.0, 1.0], [3000.0, 1.0], [3100.0, 2.0], [200.0, 52.0], [3300.0, 2.0], [300.0, 82.0], [400.0, 62.0], [500.0, 40.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 491.0, "series": [{"data": [[0.0, 224.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 491.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 20.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60246344E12, "maxY": 1.0, "series": [{"data": [[1.60246386E12, 1.0], [1.60246368E12, 1.0], [1.60246374E12, 1.0], [1.60246356E12, 1.0], [1.60246362E12, 1.0], [1.60246344E12, 1.0], [1.60246392E12, 1.0], [1.6024635E12, 1.0], [1.60246398E12, 1.0], [1.6024638E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246398E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 700.3006802721092, "minX": 1.0, "maxY": 700.3006802721092, "series": [{"data": [[1.0, 700.3006802721092]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 700.3006802721092]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 167.5, "minX": 1.60246344E12, "maxY": 274884.11666666664, "series": [{"data": [[1.60246386E12, 173381.0], [1.60246368E12, 274446.35], [1.60246374E12, 213089.35], [1.60246356E12, 165423.1], [1.60246362E12, 162829.55], [1.60246344E12, 141759.98333333334], [1.60246392E12, 237010.58333333334], [1.6024635E12, 274884.11666666664], [1.60246398E12, 23285.75], [1.6024638E12, 169675.48333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246386E12, 567.5], [1.60246368E12, 809.7666666666667], [1.60246374E12, 652.0666666666667], [1.60246356E12, 536.4666666666667], [1.60246362E12, 574.3166666666667], [1.60246344E12, 313.8666666666667], [1.60246392E12, 762.3166666666667], [1.6024635E12, 564.9166666666666], [1.60246398E12, 167.5], [1.6024638E12, 574.3166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246398E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 383.5, "minX": 1.60246344E12, "maxY": 845.5211267605631, "series": [{"data": [[1.60246386E12, 791.2533333333332], [1.60246368E12, 552.3944954128439], [1.60246374E12, 687.0804597701149], [1.60246356E12, 845.5211267605631], [1.60246362E12, 782.0131578947369], [1.60246344E12, 629.5238095238095], [1.60246392E12, 598.8019801980198], [1.6024635E12, 807.2702702702702], [1.60246398E12, 383.5], [1.6024638E12, 790.3157894736842]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246398E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 383.04166666666663, "minX": 1.60246344E12, "maxY": 844.1971830985913, "series": [{"data": [[1.60246386E12, 790.0533333333334], [1.60246368E12, 551.1926605504589], [1.60246374E12, 685.8620689655171], [1.60246356E12, 844.1971830985913], [1.60246362E12, 780.8421052631579], [1.60246344E12, 628.3571428571427], [1.60246392E12, 597.6435643564355], [1.6024635E12, 805.7702702702703], [1.60246398E12, 383.04166666666663], [1.6024638E12, 789.2631578947368]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246398E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60246344E12, "maxY": 0.7619047619047623, "series": [{"data": [[1.60246386E12, 0.026666666666666672], [1.60246368E12, 0.01834862385321101], [1.60246374E12, 0.02298850574712644], [1.60246356E12, 0.04225352112676056], [1.60246362E12, 0.03947368421052631], [1.60246344E12, 0.7619047619047623], [1.60246392E12, 0.0297029702970297], [1.6024635E12, 0.040540540540540536], [1.60246398E12, 0.0], [1.6024638E12, 0.026315789473684213]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246398E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 160.0, "minX": 1.60246344E12, "maxY": 3318.0, "series": [{"data": [[1.60246386E12, 1141.0], [1.60246368E12, 3318.0], [1.60246374E12, 3108.0], [1.60246356E12, 2925.0], [1.60246362E12, 3074.0], [1.60246344E12, 3177.0], [1.60246392E12, 2031.0], [1.6024635E12, 3313.0], [1.60246398E12, 1009.0], [1.6024638E12, 1144.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246386E12, 297.0], [1.60246368E12, 191.0], [1.60246374E12, 160.0], [1.60246356E12, 639.0], [1.60246362E12, 414.0], [1.60246344E12, 185.0], [1.60246392E12, 189.0], [1.6024635E12, 184.0], [1.60246398E12, 286.0], [1.6024638E12, 642.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246386E12, 297.0], [1.60246368E12, 191.17800002098085], [1.60246374E12, 160.0], [1.60246356E12, 639.0], [1.60246362E12, 414.0], [1.60246344E12, 185.0], [1.60246392E12, 189.00980000972748], [1.6024635E12, 184.0], [1.60246398E12, 286.0], [1.6024638E12, 642.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246386E12, 297.0], [1.60246368E12, 191.08999997377396], [1.60246374E12, 160.0], [1.60246356E12, 639.0], [1.60246362E12, 414.0], [1.60246344E12, 185.0], [1.60246392E12, 189.0], [1.6024635E12, 184.0], [1.60246398E12, 286.0], [1.6024638E12, 642.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246386E12, 297.0], [1.60246368E12, 191.0], [1.60246374E12, 160.0], [1.60246356E12, 639.0], [1.60246362E12, 414.0], [1.60246344E12, 185.0], [1.60246392E12, 189.0], [1.6024635E12, 184.0], [1.60246398E12, 286.0], [1.6024638E12, 642.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246386E12, 813.0], [1.60246368E12, 359.0], [1.60246374E12, 557.0], [1.60246356E12, 804.0], [1.60246362E12, 762.0], [1.60246344E12, 526.0], [1.60246392E12, 425.0], [1.6024635E12, 702.5], [1.60246398E12, 307.0], [1.6024638E12, 754.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246398E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 201.5, "minX": 1.0, "maxY": 826.0, "series": [{"data": [[1.0, 826.0], [2.0, 674.5], [4.0, 201.5], [5.0, 218.0], [3.0, 315.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 201.5, "minX": 1.0, "maxY": 824.5, "series": [{"data": [[1.0, 824.5], [2.0, 673.5], [4.0, 201.5], [5.0, 218.0], [3.0, 315.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.38333333333333336, "minX": 1.60246344E12, "maxY": 1.8166666666666667, "series": [{"data": [[1.60246386E12, 1.25], [1.60246368E12, 1.8166666666666667], [1.60246374E12, 1.45], [1.60246356E12, 1.1833333333333333], [1.60246362E12, 1.2666666666666666], [1.60246344E12, 0.7166666666666667], [1.60246392E12, 1.6833333333333333], [1.6024635E12, 1.2333333333333334], [1.60246398E12, 0.38333333333333336], [1.6024638E12, 1.2666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246398E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60246344E12, "maxY": 1.8166666666666667, "series": [{"data": [[1.60246386E12, 1.25], [1.60246368E12, 1.8166666666666667], [1.60246374E12, 1.45], [1.60246356E12, 1.1833333333333333], [1.60246362E12, 1.2666666666666666], [1.60246344E12, 0.7], [1.60246392E12, 1.6833333333333333], [1.6024635E12, 1.2333333333333334], [1.60246398E12, 0.4], [1.6024638E12, 1.2666666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246398E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60246344E12, "maxY": 1.8166666666666667, "series": [{"data": [[1.60246386E12, 1.25], [1.60246368E12, 1.8166666666666667], [1.60246374E12, 1.45], [1.60246356E12, 1.1833333333333333], [1.60246362E12, 1.2666666666666666], [1.60246344E12, 0.7], [1.60246392E12, 1.6833333333333333], [1.6024635E12, 1.2333333333333334], [1.60246398E12, 0.4], [1.6024638E12, 1.2666666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246398E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60246344E12, "maxY": 1.8166666666666667, "series": [{"data": [[1.60246386E12, 1.25], [1.60246368E12, 1.8166666666666667], [1.60246374E12, 1.45], [1.60246356E12, 1.1833333333333333], [1.60246362E12, 1.2666666666666666], [1.60246344E12, 0.7], [1.60246392E12, 1.6833333333333333], [1.6024635E12, 1.2333333333333334], [1.60246398E12, 0.4], [1.6024638E12, 1.2666666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246398E12, "title": "Total Transactions Per Second"}},
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

