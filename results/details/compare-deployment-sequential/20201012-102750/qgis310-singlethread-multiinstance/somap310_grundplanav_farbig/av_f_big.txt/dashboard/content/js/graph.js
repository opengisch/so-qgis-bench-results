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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 3421.0, "series": [{"data": [[0.0, 179.0], [0.1, 179.0], [0.2, 189.0], [0.3, 189.0], [0.4, 189.0], [0.5, 190.0], [0.6, 192.0], [0.7, 192.0], [0.8, 192.0], [0.9, 194.0], [1.0, 194.0], [1.1, 195.0], [1.2, 195.0], [1.3, 196.0], [1.4, 197.0], [1.5, 198.0], [1.6, 198.0], [1.7, 198.0], [1.8, 199.0], [1.9, 199.0], [2.0, 200.0], [2.1, 202.0], [2.2, 203.0], [2.3, 203.0], [2.4, 204.0], [2.5, 204.0], [2.6, 204.0], [2.7, 204.0], [2.8, 204.0], [2.9, 205.0], [3.0, 206.0], [3.1, 206.0], [3.2, 207.0], [3.3, 209.0], [3.4, 209.0], [3.5, 209.0], [3.6, 210.0], [3.7, 211.0], [3.8, 211.0], [3.9, 211.0], [4.0, 212.0], [4.1, 212.0], [4.2, 212.0], [4.3, 212.0], [4.4, 213.0], [4.5, 214.0], [4.6, 214.0], [4.7, 214.0], [4.8, 215.0], [4.9, 215.0], [5.0, 215.0], [5.1, 216.0], [5.2, 217.0], [5.3, 217.0], [5.4, 218.0], [5.5, 218.0], [5.6, 219.0], [5.7, 219.0], [5.8, 219.0], [5.9, 220.0], [6.0, 222.0], [6.1, 222.0], [6.2, 222.0], [6.3, 222.0], [6.4, 222.0], [6.5, 222.0], [6.6, 223.0], [6.7, 223.0], [6.8, 223.0], [6.9, 223.0], [7.0, 225.0], [7.1, 225.0], [7.2, 225.0], [7.3, 233.0], [7.4, 237.0], [7.5, 241.0], [7.6, 241.0], [7.7, 250.0], [7.8, 262.0], [7.9, 285.0], [8.0, 285.0], [8.1, 293.0], [8.2, 299.0], [8.3, 300.0], [8.4, 300.0], [8.5, 301.0], [8.6, 301.0], [8.7, 301.0], [8.8, 302.0], [8.9, 303.0], [9.0, 305.0], [9.1, 305.0], [9.2, 305.0], [9.3, 305.0], [9.4, 306.0], [9.5, 306.0], [9.6, 307.0], [9.7, 307.0], [9.8, 307.0], [9.9, 307.0], [10.0, 307.0], [10.1, 307.0], [10.2, 307.0], [10.3, 309.0], [10.4, 309.0], [10.5, 309.0], [10.6, 309.0], [10.7, 309.0], [10.8, 309.0], [10.9, 310.0], [11.0, 310.0], [11.1, 311.0], [11.2, 311.0], [11.3, 312.0], [11.4, 312.0], [11.5, 312.0], [11.6, 312.0], [11.7, 312.0], [11.8, 313.0], [11.9, 313.0], [12.0, 313.0], [12.1, 313.0], [12.2, 313.0], [12.3, 314.0], [12.4, 314.0], [12.5, 314.0], [12.6, 314.0], [12.7, 315.0], [12.8, 316.0], [12.9, 316.0], [13.0, 317.0], [13.1, 317.0], [13.2, 319.0], [13.3, 319.0], [13.4, 319.0], [13.5, 320.0], [13.6, 320.0], [13.7, 320.0], [13.8, 320.0], [13.9, 320.0], [14.0, 320.0], [14.1, 321.0], [14.2, 322.0], [14.3, 322.0], [14.4, 322.0], [14.5, 322.0], [14.6, 323.0], [14.7, 324.0], [14.8, 324.0], [14.9, 326.0], [15.0, 326.0], [15.1, 326.0], [15.2, 326.0], [15.3, 326.0], [15.4, 327.0], [15.5, 327.0], [15.6, 328.0], [15.7, 329.0], [15.8, 330.0], [15.9, 330.0], [16.0, 331.0], [16.1, 332.0], [16.2, 333.0], [16.3, 333.0], [16.4, 333.0], [16.5, 334.0], [16.6, 334.0], [16.7, 334.0], [16.8, 336.0], [16.9, 336.0], [17.0, 336.0], [17.1, 336.0], [17.2, 336.0], [17.3, 337.0], [17.4, 337.0], [17.5, 339.0], [17.6, 339.0], [17.7, 341.0], [17.8, 341.0], [17.9, 342.0], [18.0, 345.0], [18.1, 347.0], [18.2, 347.0], [18.3, 348.0], [18.4, 351.0], [18.5, 351.0], [18.6, 353.0], [18.7, 354.0], [18.8, 356.0], [18.9, 356.0], [19.0, 357.0], [19.1, 358.0], [19.2, 365.0], [19.3, 365.0], [19.4, 365.0], [19.5, 366.0], [19.6, 366.0], [19.7, 366.0], [19.8, 366.0], [19.9, 368.0], [20.0, 368.0], [20.1, 368.0], [20.2, 369.0], [20.3, 370.0], [20.4, 370.0], [20.5, 384.0], [20.6, 384.0], [20.7, 396.0], [20.8, 396.0], [20.9, 411.0], [21.0, 415.0], [21.1, 418.0], [21.2, 418.0], [21.3, 421.0], [21.4, 422.0], [21.5, 423.0], [21.6, 423.0], [21.7, 425.0], [21.8, 428.0], [21.9, 428.0], [22.0, 429.0], [22.1, 431.0], [22.2, 432.0], [22.3, 432.0], [22.4, 433.0], [22.5, 434.0], [22.6, 434.0], [22.7, 434.0], [22.8, 435.0], [22.9, 435.0], [23.0, 436.0], [23.1, 436.0], [23.2, 436.0], [23.3, 437.0], [23.4, 437.0], [23.5, 437.0], [23.6, 438.0], [23.7, 438.0], [23.8, 438.0], [23.9, 438.0], [24.0, 438.0], [24.1, 439.0], [24.2, 439.0], [24.3, 442.0], [24.4, 443.0], [24.5, 443.0], [24.6, 443.0], [24.7, 443.0], [24.8, 444.0], [24.9, 444.0], [25.0, 444.0], [25.1, 445.0], [25.2, 446.0], [25.3, 446.0], [25.4, 446.0], [25.5, 446.0], [25.6, 446.0], [25.7, 446.0], [25.8, 447.0], [25.9, 447.0], [26.0, 451.0], [26.1, 451.0], [26.2, 451.0], [26.3, 452.0], [26.4, 452.0], [26.5, 452.0], [26.6, 454.0], [26.7, 455.0], [26.8, 455.0], [26.9, 456.0], [27.0, 457.0], [27.1, 457.0], [27.2, 457.0], [27.3, 461.0], [27.4, 463.0], [27.5, 463.0], [27.6, 463.0], [27.7, 465.0], [27.8, 465.0], [27.9, 466.0], [28.0, 466.0], [28.1, 468.0], [28.2, 472.0], [28.3, 473.0], [28.4, 473.0], [28.5, 475.0], [28.6, 476.0], [28.7, 476.0], [28.8, 476.0], [28.9, 477.0], [29.0, 478.0], [29.1, 478.0], [29.2, 482.0], [29.3, 484.0], [29.4, 487.0], [29.5, 487.0], [29.6, 499.0], [29.7, 502.0], [29.8, 508.0], [29.9, 508.0], [30.0, 510.0], [30.1, 512.0], [30.2, 512.0], [30.3, 515.0], [30.4, 515.0], [30.5, 515.0], [30.6, 515.0], [30.7, 517.0], [30.8, 519.0], [30.9, 527.0], [31.0, 527.0], [31.1, 529.0], [31.2, 533.0], [31.3, 533.0], [31.4, 533.0], [31.5, 534.0], [31.6, 537.0], [31.7, 537.0], [31.8, 538.0], [31.9, 538.0], [32.0, 540.0], [32.1, 540.0], [32.2, 543.0], [32.3, 543.0], [32.4, 546.0], [32.5, 546.0], [32.6, 546.0], [32.7, 548.0], [32.8, 549.0], [32.9, 549.0], [33.0, 550.0], [33.1, 552.0], [33.2, 553.0], [33.3, 553.0], [33.4, 553.0], [33.5, 554.0], [33.6, 554.0], [33.7, 554.0], [33.8, 555.0], [33.9, 556.0], [34.0, 556.0], [34.1, 559.0], [34.2, 566.0], [34.3, 566.0], [34.4, 566.0], [34.5, 572.0], [34.6, 572.0], [34.7, 577.0], [34.8, 577.0], [34.9, 580.0], [35.0, 583.0], [35.1, 583.0], [35.2, 589.0], [35.3, 592.0], [35.4, 599.0], [35.5, 599.0], [35.6, 604.0], [35.7, 617.0], [35.8, 641.0], [35.9, 641.0], [36.0, 642.0], [36.1, 643.0], [36.2, 645.0], [36.3, 645.0], [36.4, 646.0], [36.5, 651.0], [36.6, 653.0], [36.7, 653.0], [36.8, 654.0], [36.9, 658.0], [37.0, 658.0], [37.1, 659.0], [37.2, 664.0], [37.3, 665.0], [37.4, 665.0], [37.5, 666.0], [37.6, 667.0], [37.7, 668.0], [37.8, 668.0], [37.9, 669.0], [38.0, 670.0], [38.1, 670.0], [38.2, 670.0], [38.3, 670.0], [38.4, 671.0], [38.5, 671.0], [38.6, 671.0], [38.7, 672.0], [38.8, 672.0], [38.9, 672.0], [39.0, 673.0], [39.1, 673.0], [39.2, 674.0], [39.3, 674.0], [39.4, 674.0], [39.5, 674.0], [39.6, 676.0], [39.7, 676.0], [39.8, 677.0], [39.9, 678.0], [40.0, 678.0], [40.1, 678.0], [40.2, 679.0], [40.3, 679.0], [40.4, 679.0], [40.5, 679.0], [40.6, 679.0], [40.7, 680.0], [40.8, 680.0], [40.9, 680.0], [41.0, 681.0], [41.1, 681.0], [41.2, 681.0], [41.3, 681.0], [41.4, 681.0], [41.5, 681.0], [41.6, 681.0], [41.7, 682.0], [41.8, 684.0], [41.9, 684.0], [42.0, 684.0], [42.1, 685.0], [42.2, 686.0], [42.3, 686.0], [42.4, 686.0], [42.5, 687.0], [42.6, 687.0], [42.7, 687.0], [42.8, 688.0], [42.9, 688.0], [43.0, 688.0], [43.1, 688.0], [43.2, 688.0], [43.3, 688.0], [43.4, 688.0], [43.5, 689.0], [43.6, 690.0], [43.7, 690.0], [43.8, 690.0], [43.9, 690.0], [44.0, 690.0], [44.1, 691.0], [44.2, 691.0], [44.3, 691.0], [44.4, 692.0], [44.5, 693.0], [44.6, 693.0], [44.7, 693.0], [44.8, 693.0], [44.9, 693.0], [45.0, 693.0], [45.1, 693.0], [45.2, 693.0], [45.3, 693.0], [45.4, 694.0], [45.5, 695.0], [45.6, 695.0], [45.7, 695.0], [45.8, 696.0], [45.9, 696.0], [46.0, 696.0], [46.1, 696.0], [46.2, 697.0], [46.3, 697.0], [46.4, 697.0], [46.5, 697.0], [46.6, 697.0], [46.7, 698.0], [46.8, 698.0], [46.9, 699.0], [47.0, 699.0], [47.1, 699.0], [47.2, 699.0], [47.3, 700.0], [47.4, 700.0], [47.5, 700.0], [47.6, 700.0], [47.7, 701.0], [47.8, 702.0], [47.9, 703.0], [48.0, 703.0], [48.1, 704.0], [48.2, 704.0], [48.3, 704.0], [48.4, 704.0], [48.5, 704.0], [48.6, 704.0], [48.7, 704.0], [48.8, 704.0], [48.9, 705.0], [49.0, 705.0], [49.1, 705.0], [49.2, 705.0], [49.3, 705.0], [49.4, 706.0], [49.5, 706.0], [49.6, 706.0], [49.7, 707.0], [49.8, 707.0], [49.9, 707.0], [50.0, 707.0], [50.1, 709.0], [50.2, 709.0], [50.3, 710.0], [50.4, 710.0], [50.5, 711.0], [50.6, 711.0], [50.7, 711.0], [50.8, 711.0], [50.9, 711.0], [51.0, 711.0], [51.1, 712.0], [51.2, 713.0], [51.3, 713.0], [51.4, 713.0], [51.5, 713.0], [51.6, 714.0], [51.7, 714.0], [51.8, 714.0], [51.9, 714.0], [52.0, 715.0], [52.1, 715.0], [52.2, 717.0], [52.3, 718.0], [52.4, 719.0], [52.5, 719.0], [52.6, 719.0], [52.7, 721.0], [52.8, 722.0], [52.9, 722.0], [53.0, 723.0], [53.1, 723.0], [53.2, 724.0], [53.3, 724.0], [53.4, 724.0], [53.5, 724.0], [53.6, 724.0], [53.7, 725.0], [53.8, 726.0], [53.9, 726.0], [54.0, 726.0], [54.1, 727.0], [54.2, 727.0], [54.3, 729.0], [54.4, 729.0], [54.5, 729.0], [54.6, 730.0], [54.7, 733.0], [54.8, 733.0], [54.9, 733.0], [55.0, 734.0], [55.1, 734.0], [55.2, 734.0], [55.3, 736.0], [55.4, 737.0], [55.5, 737.0], [55.6, 737.0], [55.7, 737.0], [55.8, 738.0], [55.9, 738.0], [56.0, 738.0], [56.1, 739.0], [56.2, 739.0], [56.3, 739.0], [56.4, 739.0], [56.5, 740.0], [56.6, 743.0], [56.7, 743.0], [56.8, 743.0], [56.9, 744.0], [57.0, 744.0], [57.1, 746.0], [57.2, 746.0], [57.3, 746.0], [57.4, 746.0], [57.5, 746.0], [57.6, 748.0], [57.7, 748.0], [57.8, 748.0], [57.9, 749.0], [58.0, 751.0], [58.1, 751.0], [58.2, 751.0], [58.3, 751.0], [58.4, 752.0], [58.5, 752.0], [58.6, 752.0], [58.7, 752.0], [58.8, 754.0], [58.9, 754.0], [59.0, 755.0], [59.1, 756.0], [59.2, 756.0], [59.3, 756.0], [59.4, 756.0], [59.5, 757.0], [59.6, 760.0], [59.7, 760.0], [59.8, 760.0], [59.9, 762.0], [60.0, 763.0], [60.1, 763.0], [60.2, 764.0], [60.3, 765.0], [60.4, 765.0], [60.5, 769.0], [60.6, 769.0], [60.7, 769.0], [60.8, 769.0], [60.9, 771.0], [61.0, 771.0], [61.1, 772.0], [61.2, 772.0], [61.3, 774.0], [61.4, 777.0], [61.5, 779.0], [61.6, 779.0], [61.7, 781.0], [61.8, 782.0], [61.9, 782.0], [62.0, 783.0], [62.1, 784.0], [62.2, 785.0], [62.3, 785.0], [62.4, 786.0], [62.5, 787.0], [62.6, 787.0], [62.7, 787.0], [62.8, 793.0], [62.9, 795.0], [63.0, 795.0], [63.1, 795.0], [63.2, 797.0], [63.3, 801.0], [63.4, 801.0], [63.5, 804.0], [63.6, 805.0], [63.7, 805.0], [63.8, 805.0], [63.9, 805.0], [64.0, 805.0], [64.1, 808.0], [64.2, 808.0], [64.3, 809.0], [64.4, 809.0], [64.5, 810.0], [64.6, 810.0], [64.7, 810.0], [64.8, 810.0], [64.9, 812.0], [65.0, 812.0], [65.1, 820.0], [65.2, 822.0], [65.3, 822.0], [65.4, 826.0], [65.5, 827.0], [65.6, 830.0], [65.7, 830.0], [65.8, 832.0], [65.9, 832.0], [66.0, 832.0], [66.1, 832.0], [66.2, 836.0], [66.3, 836.0], [66.4, 838.0], [66.5, 838.0], [66.6, 838.0], [66.7, 839.0], [66.8, 839.0], [66.9, 840.0], [67.0, 840.0], [67.1, 840.0], [67.2, 840.0], [67.3, 841.0], [67.4, 844.0], [67.5, 845.0], [67.6, 845.0], [67.7, 845.0], [67.8, 846.0], [67.9, 847.0], [68.0, 847.0], [68.1, 848.0], [68.2, 848.0], [68.3, 848.0], [68.4, 848.0], [68.5, 851.0], [68.6, 853.0], [68.7, 853.0], [68.8, 854.0], [68.9, 854.0], [69.0, 855.0], [69.1, 855.0], [69.2, 856.0], [69.3, 857.0], [69.4, 858.0], [69.5, 858.0], [69.6, 858.0], [69.7, 858.0], [69.8, 859.0], [69.9, 859.0], [70.0, 859.0], [70.1, 860.0], [70.2, 860.0], [70.3, 861.0], [70.4, 862.0], [70.5, 862.0], [70.6, 862.0], [70.7, 863.0], [70.8, 863.0], [70.9, 864.0], [71.0, 864.0], [71.1, 864.0], [71.2, 865.0], [71.3, 866.0], [71.4, 866.0], [71.5, 868.0], [71.6, 868.0], [71.7, 868.0], [71.8, 868.0], [71.9, 869.0], [72.0, 869.0], [72.1, 869.0], [72.2, 869.0], [72.3, 873.0], [72.4, 874.0], [72.5, 874.0], [72.6, 875.0], [72.7, 875.0], [72.8, 875.0], [72.9, 875.0], [73.0, 876.0], [73.1, 876.0], [73.2, 877.0], [73.3, 877.0], [73.4, 877.0], [73.5, 878.0], [73.6, 878.0], [73.7, 878.0], [73.8, 879.0], [73.9, 880.0], [74.0, 880.0], [74.1, 880.0], [74.2, 880.0], [74.3, 881.0], [74.4, 881.0], [74.5, 881.0], [74.6, 884.0], [74.7, 885.0], [74.8, 885.0], [74.9, 885.0], [75.0, 887.0], [75.1, 887.0], [75.2, 887.0], [75.3, 888.0], [75.4, 888.0], [75.5, 888.0], [75.6, 888.0], [75.7, 889.0], [75.8, 889.0], [75.9, 889.0], [76.0, 890.0], [76.1, 890.0], [76.2, 892.0], [76.3, 892.0], [76.4, 892.0], [76.5, 893.0], [76.6, 894.0], [76.7, 894.0], [76.8, 896.0], [76.9, 896.0], [77.0, 896.0], [77.1, 897.0], [77.2, 898.0], [77.3, 898.0], [77.4, 898.0], [77.5, 899.0], [77.6, 899.0], [77.7, 901.0], [77.8, 901.0], [77.9, 904.0], [78.0, 905.0], [78.1, 909.0], [78.2, 909.0], [78.3, 910.0], [78.4, 910.0], [78.5, 910.0], [78.6, 911.0], [78.7, 916.0], [78.8, 919.0], [78.9, 919.0], [79.0, 921.0], [79.1, 921.0], [79.2, 922.0], [79.3, 922.0], [79.4, 925.0], [79.5, 925.0], [79.6, 926.0], [79.7, 926.0], [79.8, 927.0], [79.9, 927.0], [80.0, 930.0], [80.1, 930.0], [80.2, 930.0], [80.3, 930.0], [80.4, 930.0], [80.5, 930.0], [80.6, 932.0], [80.7, 932.0], [80.8, 932.0], [80.9, 934.0], [81.0, 935.0], [81.1, 936.0], [81.2, 936.0], [81.3, 936.0], [81.4, 940.0], [81.5, 940.0], [81.6, 940.0], [81.7, 942.0], [81.8, 943.0], [81.9, 943.0], [82.0, 943.0], [82.1, 952.0], [82.2, 953.0], [82.3, 953.0], [82.4, 955.0], [82.5, 957.0], [82.6, 959.0], [82.7, 959.0], [82.8, 964.0], [82.9, 965.0], [83.0, 966.0], [83.1, 966.0], [83.2, 971.0], [83.3, 971.0], [83.4, 971.0], [83.5, 973.0], [83.6, 973.0], [83.7, 977.0], [83.8, 977.0], [83.9, 977.0], [84.0, 980.0], [84.1, 981.0], [84.2, 981.0], [84.3, 981.0], [84.4, 981.0], [84.5, 982.0], [84.6, 982.0], [84.7, 983.0], [84.8, 983.0], [84.9, 984.0], [85.0, 984.0], [85.1, 984.0], [85.2, 985.0], [85.3, 985.0], [85.4, 985.0], [85.5, 985.0], [85.6, 988.0], [85.7, 988.0], [85.8, 989.0], [85.9, 991.0], [86.0, 992.0], [86.1, 992.0], [86.2, 999.0], [86.3, 1001.0], [86.4, 1004.0], [86.5, 1004.0], [86.6, 1006.0], [86.7, 1010.0], [86.8, 1010.0], [86.9, 1010.0], [87.0, 1011.0], [87.1, 1011.0], [87.2, 1011.0], [87.3, 1012.0], [87.4, 1012.0], [87.5, 1015.0], [87.6, 1015.0], [87.7, 1016.0], [87.8, 1020.0], [87.9, 1022.0], [88.0, 1022.0], [88.1, 1025.0], [88.2, 1027.0], [88.3, 1027.0], [88.4, 1027.0], [88.5, 1035.0], [88.6, 1036.0], [88.7, 1036.0], [88.8, 1036.0], [88.9, 1038.0], [89.0, 1039.0], [89.1, 1039.0], [89.2, 1041.0], [89.3, 1044.0], [89.4, 1047.0], [89.5, 1047.0], [89.6, 1049.0], [89.7, 1050.0], [89.8, 1050.0], [89.9, 1050.0], [90.0, 1051.0], [90.1, 1051.0], [90.2, 1051.0], [90.3, 1052.0], [90.4, 1054.0], [90.5, 1054.0], [90.6, 1054.0], [90.7, 1055.0], [90.8, 1057.0], [90.9, 1057.0], [91.0, 1057.0], [91.1, 1060.0], [91.2, 1060.0], [91.3, 1066.0], [91.4, 1066.0], [91.5, 1072.0], [91.6, 1074.0], [91.7, 1074.0], [91.8, 1076.0], [91.9, 1079.0], [92.0, 1083.0], [92.1, 1083.0], [92.2, 1086.0], [92.3, 1090.0], [92.4, 1095.0], [92.5, 1095.0], [92.6, 1101.0], [92.7, 1112.0], [92.8, 1121.0], [92.9, 1121.0], [93.0, 1127.0], [93.1, 1140.0], [93.2, 1142.0], [93.3, 1142.0], [93.4, 1162.0], [93.5, 1171.0], [93.6, 1171.0], [93.7, 1172.0], [93.8, 1176.0], [93.9, 1184.0], [94.0, 1184.0], [94.1, 1192.0], [94.2, 1203.0], [94.3, 1205.0], [94.4, 1205.0], [94.5, 1216.0], [94.6, 1221.0], [94.7, 1223.0], [94.8, 1223.0], [94.9, 1239.0], [95.0, 1245.0], [95.1, 1245.0], [95.2, 1257.0], [95.3, 1262.0], [95.4, 1277.0], [95.5, 1277.0], [95.6, 1282.0], [95.7, 1284.0], [95.8, 1290.0], [95.9, 1290.0], [96.0, 1303.0], [96.1, 1314.0], [96.2, 1321.0], [96.3, 1321.0], [96.4, 1322.0], [96.5, 1351.0], [96.6, 1370.0], [96.7, 1370.0], [96.8, 1370.0], [96.9, 1398.0], [97.0, 1398.0], [97.1, 1405.0], [97.2, 1505.0], [97.3, 1517.0], [97.4, 1517.0], [97.5, 1552.0], [97.6, 1568.0], [97.7, 1583.0], [97.8, 1583.0], [97.9, 1607.0], [98.0, 1623.0], [98.1, 1648.0], [98.2, 1648.0], [98.3, 1663.0], [98.4, 1772.0], [98.5, 1772.0], [98.6, 2022.0], [98.7, 2039.0], [98.8, 2066.0], [98.9, 2066.0], [99.0, 2441.0], [99.1, 2516.0], [99.2, 2970.0], [99.3, 2970.0], [99.4, 2983.0], [99.5, 3064.0], [99.6, 3071.0], [99.7, 3071.0], [99.8, 3331.0], [99.9, 3421.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 118.0, "series": [{"data": [[600.0, 86.0], [2400.0, 1.0], [2500.0, 1.0], [700.0, 118.0], [2900.0, 2.0], [3000.0, 2.0], [200.0, 47.0], [800.0, 106.0], [3300.0, 1.0], [3400.0, 1.0], [900.0, 63.0], [1000.0, 46.0], [1100.0, 12.0], [300.0, 92.0], [1200.0, 13.0], [1300.0, 8.0], [1400.0, 1.0], [1500.0, 5.0], [400.0, 65.0], [100.0, 14.0], [1600.0, 4.0], [1700.0, 1.0], [500.0, 43.0], [2000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 496.0, "series": [{"data": [[0.0, 218.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 496.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60249848E12, "maxY": 1.0, "series": [{"data": [[1.60249872E12, 1.0], [1.6024989E12, 1.0], [1.60249878E12, 1.0], [1.6024986E12, 1.0], [1.60249866E12, 1.0], [1.60249896E12, 1.0], [1.60249848E12, 1.0], [1.60249854E12, 1.0], [1.60249884E12, 1.0], [1.60249902E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249902E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 718.7972789115643, "minX": 1.0, "maxY": 718.7972789115643, "series": [{"data": [[1.0, 718.7972789115643]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 718.7972789115643]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 198.83333333333334, "minX": 1.60249848E12, "maxY": 277189.0333333333, "series": [{"data": [[1.60249872E12, 277189.0333333333], [1.6024989E12, 169490.93333333332], [1.60249878E12, 206686.11666666667], [1.6024986E12, 161870.03333333333], [1.60249866E12, 153928.53333333333], [1.60249896E12, 213608.75], [1.60249848E12, 178322.73333333334], [1.60249854E12, 259682.55], [1.60249884E12, 165927.18333333332], [1.60249902E12, 49081.11666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60249872E12, 794.7333333333333], [1.6024989E12, 552.4], [1.60249878E12, 621.8666666666667], [1.6024986E12, 521.3833333333333], [1.60249866E12, 589.3166666666667], [1.60249896E12, 738.5333333333333], [1.60249848E12, 443.6], [1.60249854E12, 503.1666666666667], [1.60249884E12, 559.2], [1.60249902E12, 198.83333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249902E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 463.35714285714295, "minX": 1.60249848E12, "maxY": 911.2424242424242, "series": [{"data": [[1.60249872E12, 561.8037383177567], [1.6024989E12, 816.6027397260274], [1.60249878E12, 722.6746987951809], [1.6024986E12, 869.768115942029], [1.60249866E12, 759.3846153846154], [1.60249896E12, 611.2857142857142], [1.60249848E12, 613.4406779661017], [1.60249854E12, 911.2424242424242], [1.60249884E12, 812.8108108108108], [1.60249902E12, 463.35714285714295]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249902E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 462.6428571428571, "minX": 1.60249848E12, "maxY": 909.4545454545453, "series": [{"data": [[1.60249872E12, 560.6822429906541], [1.6024989E12, 815.5616438356163], [1.60249878E12, 721.3132530120483], [1.6024986E12, 868.4492753623189], [1.60249866E12, 758.2820512820513], [1.60249896E12, 610.2959183673471], [1.60249848E12, 612.4406779661016], [1.60249854E12, 909.4545454545453], [1.60249884E12, 811.7027027027028], [1.60249902E12, 462.6428571428571]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249902E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60249848E12, "maxY": 0.525423728813559, "series": [{"data": [[1.60249872E12, 0.018691588785046735], [1.6024989E12, 0.027397260273972605], [1.60249878E12, 0.024096385542168676], [1.6024986E12, 0.04347826086956524], [1.60249866E12, 0.025641025641025644], [1.60249896E12, 0.02040816326530613], [1.60249848E12, 0.525423728813559], [1.60249854E12, 0.030303030303030304], [1.60249884E12, 0.040540540540540536], [1.60249902E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249902E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.60249848E12, "maxY": 3421.0, "series": [{"data": [[1.60249872E12, 3421.0], [1.6024989E12, 1172.0], [1.60249878E12, 2441.0], [1.6024986E12, 2970.0], [1.60249866E12, 3071.0], [1.60249896E12, 2066.0], [1.60249848E12, 3331.0], [1.60249854E12, 2983.0], [1.60249884E12, 1192.0], [1.60249902E12, 1568.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60249872E12, 189.0], [1.6024989E12, 316.0], [1.60249878E12, 189.0], [1.6024986E12, 671.0], [1.60249866E12, 421.0], [1.60249896E12, 179.0], [1.60249848E12, 195.0], [1.60249854E12, 311.0], [1.60249884E12, 642.0], [1.60249902E12, 301.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60249872E12, 189.06920001029968], [1.6024989E12, 316.0], [1.60249878E12, 189.0], [1.6024986E12, 671.0], [1.60249866E12, 421.0], [1.60249896E12, 179.0], [1.60249848E12, 195.0], [1.60249854E12, 311.0], [1.60249884E12, 642.0], [1.60249902E12, 301.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60249872E12, 189.0259999871254], [1.6024989E12, 316.0], [1.60249878E12, 189.0], [1.6024986E12, 671.0], [1.60249866E12, 421.0], [1.60249896E12, 179.0], [1.60249848E12, 195.0], [1.60249854E12, 311.0], [1.60249884E12, 642.0], [1.60249902E12, 301.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60249872E12, 189.0], [1.6024989E12, 316.0], [1.60249878E12, 189.0], [1.6024986E12, 671.0], [1.60249866E12, 421.0], [1.60249896E12, 179.0], [1.60249848E12, 195.0], [1.60249854E12, 311.0], [1.60249884E12, 642.0], [1.60249902E12, 301.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60249872E12, 339.0], [1.6024989E12, 845.0], [1.60249878E12, 722.0], [1.6024986E12, 826.0], [1.60249866E12, 738.5], [1.60249896E12, 462.0], [1.60249848E12, 538.0], [1.60249854E12, 801.5], [1.60249884E12, 770.5], [1.60249902E12, 319.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249902E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 219.0, "minX": 1.0, "maxY": 869.0, "series": [{"data": [[1.0, 869.0], [2.0, 690.0], [4.0, 233.0], [5.0, 219.0], [3.0, 326.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 219.0, "minX": 1.0, "maxY": 868.0, "series": [{"data": [[1.0, 868.0], [2.0, 688.5], [4.0, 233.0], [5.0, 219.0], [3.0, 326.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.45, "minX": 1.60249848E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60249872E12, 1.7833333333333334], [1.6024989E12, 1.2166666666666666], [1.60249878E12, 1.3833333333333333], [1.6024986E12, 1.15], [1.60249866E12, 1.3], [1.60249896E12, 1.6333333333333333], [1.60249848E12, 1.0], [1.60249854E12, 1.1], [1.60249884E12, 1.2333333333333334], [1.60249902E12, 0.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249902E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60249848E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60249872E12, 1.7833333333333334], [1.6024989E12, 1.2166666666666666], [1.60249878E12, 1.3833333333333333], [1.6024986E12, 1.15], [1.60249866E12, 1.3], [1.60249896E12, 1.6333333333333333], [1.60249848E12, 0.9833333333333333], [1.60249854E12, 1.1], [1.60249884E12, 1.2333333333333334], [1.60249902E12, 0.4666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60249902E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60249848E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60249872E12, 1.7833333333333334], [1.6024989E12, 1.2166666666666666], [1.60249878E12, 1.3833333333333333], [1.6024986E12, 1.15], [1.60249866E12, 1.3], [1.60249896E12, 1.6333333333333333], [1.60249848E12, 0.9833333333333333], [1.60249854E12, 1.1], [1.60249884E12, 1.2333333333333334], [1.60249902E12, 0.4666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249902E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4666666666666667, "minX": 1.60249848E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60249872E12, 1.7833333333333334], [1.6024989E12, 1.2166666666666666], [1.60249878E12, 1.3833333333333333], [1.6024986E12, 1.15], [1.60249866E12, 1.3], [1.60249896E12, 1.6333333333333333], [1.60249848E12, 0.9833333333333333], [1.60249854E12, 1.1], [1.60249884E12, 1.2333333333333334], [1.60249902E12, 0.4666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60249902E12, "title": "Total Transactions Per Second"}},
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

