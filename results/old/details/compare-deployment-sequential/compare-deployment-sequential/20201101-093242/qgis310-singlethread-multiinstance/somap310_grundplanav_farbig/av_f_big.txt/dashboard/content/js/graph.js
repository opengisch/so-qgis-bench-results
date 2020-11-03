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
        data: {"result": {"minY": 171.0, "minX": 0.0, "maxY": 3329.0, "series": [{"data": [[0.0, 171.0], [0.1, 171.0], [0.2, 172.0], [0.3, 187.0], [0.4, 187.0], [0.5, 187.0], [0.6, 188.0], [0.7, 189.0], [0.8, 189.0], [0.9, 190.0], [1.0, 190.0], [1.1, 190.0], [1.2, 190.0], [1.3, 193.0], [1.4, 194.0], [1.5, 194.0], [1.6, 194.0], [1.7, 195.0], [1.8, 195.0], [1.9, 195.0], [2.0, 196.0], [2.1, 197.0], [2.2, 197.0], [2.3, 197.0], [2.4, 199.0], [2.5, 199.0], [2.6, 200.0], [2.7, 200.0], [2.8, 202.0], [2.9, 202.0], [3.0, 203.0], [3.1, 203.0], [3.2, 204.0], [3.3, 204.0], [3.4, 204.0], [3.5, 205.0], [3.6, 206.0], [3.7, 207.0], [3.8, 207.0], [3.9, 208.0], [4.0, 208.0], [4.1, 208.0], [4.2, 208.0], [4.3, 209.0], [4.4, 209.0], [4.5, 210.0], [4.6, 210.0], [4.7, 211.0], [4.8, 211.0], [4.9, 211.0], [5.0, 211.0], [5.1, 211.0], [5.2, 211.0], [5.3, 211.0], [5.4, 211.0], [5.5, 211.0], [5.6, 212.0], [5.7, 212.0], [5.8, 212.0], [5.9, 212.0], [6.0, 213.0], [6.1, 213.0], [6.2, 216.0], [6.3, 218.0], [6.4, 219.0], [6.5, 219.0], [6.6, 221.0], [6.7, 227.0], [6.8, 227.0], [6.9, 239.0], [7.0, 241.0], [7.1, 242.0], [7.2, 242.0], [7.3, 244.0], [7.4, 251.0], [7.5, 251.0], [7.6, 251.0], [7.7, 274.0], [7.8, 277.0], [7.9, 286.0], [8.0, 286.0], [8.1, 288.0], [8.2, 293.0], [8.3, 294.0], [8.4, 294.0], [8.5, 296.0], [8.6, 296.0], [8.7, 296.0], [8.8, 297.0], [8.9, 298.0], [9.0, 299.0], [9.1, 299.0], [9.2, 300.0], [9.3, 300.0], [9.4, 301.0], [9.5, 301.0], [9.6, 302.0], [9.7, 303.0], [9.8, 304.0], [9.9, 304.0], [10.0, 305.0], [10.1, 305.0], [10.2, 305.0], [10.3, 305.0], [10.4, 305.0], [10.5, 306.0], [10.6, 306.0], [10.7, 306.0], [10.8, 306.0], [10.9, 306.0], [11.0, 306.0], [11.1, 307.0], [11.2, 308.0], [11.3, 309.0], [11.4, 309.0], [11.5, 309.0], [11.6, 310.0], [11.7, 310.0], [11.8, 311.0], [11.9, 312.0], [12.0, 312.0], [12.1, 312.0], [12.2, 312.0], [12.3, 312.0], [12.4, 313.0], [12.5, 313.0], [12.6, 313.0], [12.7, 315.0], [12.8, 315.0], [12.9, 315.0], [13.0, 315.0], [13.1, 316.0], [13.2, 317.0], [13.3, 317.0], [13.4, 318.0], [13.5, 320.0], [13.6, 320.0], [13.7, 320.0], [13.8, 320.0], [13.9, 320.0], [14.0, 320.0], [14.1, 320.0], [14.2, 320.0], [14.3, 321.0], [14.4, 321.0], [14.5, 321.0], [14.6, 322.0], [14.7, 322.0], [14.8, 322.0], [14.9, 322.0], [15.0, 322.0], [15.1, 322.0], [15.2, 322.0], [15.3, 324.0], [15.4, 324.0], [15.5, 324.0], [15.6, 325.0], [15.7, 326.0], [15.8, 326.0], [15.9, 326.0], [16.0, 326.0], [16.1, 327.0], [16.2, 327.0], [16.3, 327.0], [16.4, 327.0], [16.5, 328.0], [16.6, 328.0], [16.7, 328.0], [16.8, 329.0], [16.9, 329.0], [17.0, 329.0], [17.1, 330.0], [17.2, 331.0], [17.3, 332.0], [17.4, 332.0], [17.5, 332.0], [17.6, 335.0], [17.7, 340.0], [17.8, 340.0], [17.9, 342.0], [18.0, 342.0], [18.1, 344.0], [18.2, 344.0], [18.3, 344.0], [18.4, 346.0], [18.5, 346.0], [18.6, 347.0], [18.7, 349.0], [18.8, 354.0], [18.9, 354.0], [19.0, 355.0], [19.1, 358.0], [19.2, 359.0], [19.3, 359.0], [19.4, 360.0], [19.5, 361.0], [19.6, 364.0], [19.7, 364.0], [19.8, 364.0], [19.9, 365.0], [20.0, 371.0], [20.1, 371.0], [20.2, 371.0], [20.3, 375.0], [20.4, 375.0], [20.5, 383.0], [20.6, 385.0], [20.7, 392.0], [20.8, 392.0], [20.9, 394.0], [21.0, 395.0], [21.1, 404.0], [21.2, 404.0], [21.3, 411.0], [21.4, 412.0], [21.5, 415.0], [21.6, 415.0], [21.7, 417.0], [21.8, 427.0], [21.9, 427.0], [22.0, 428.0], [22.1, 429.0], [22.2, 432.0], [22.3, 432.0], [22.4, 434.0], [22.5, 434.0], [22.6, 435.0], [22.7, 435.0], [22.8, 435.0], [22.9, 435.0], [23.0, 436.0], [23.1, 436.0], [23.2, 437.0], [23.3, 438.0], [23.4, 438.0], [23.5, 438.0], [23.6, 438.0], [23.7, 440.0], [23.8, 440.0], [23.9, 441.0], [24.0, 441.0], [24.1, 442.0], [24.2, 442.0], [24.3, 442.0], [24.4, 442.0], [24.5, 443.0], [24.6, 443.0], [24.7, 443.0], [24.8, 444.0], [24.9, 444.0], [25.0, 444.0], [25.1, 446.0], [25.2, 446.0], [25.3, 446.0], [25.4, 448.0], [25.5, 448.0], [25.6, 448.0], [25.7, 448.0], [25.8, 449.0], [25.9, 453.0], [26.0, 454.0], [26.1, 454.0], [26.2, 454.0], [26.3, 455.0], [26.4, 455.0], [26.5, 455.0], [26.6, 456.0], [26.7, 456.0], [26.8, 456.0], [26.9, 458.0], [27.0, 459.0], [27.1, 459.0], [27.2, 459.0], [27.3, 464.0], [27.4, 464.0], [27.5, 465.0], [27.6, 465.0], [27.7, 467.0], [27.8, 468.0], [27.9, 468.0], [28.0, 468.0], [28.1, 469.0], [28.2, 474.0], [28.3, 475.0], [28.4, 475.0], [28.5, 476.0], [28.6, 482.0], [28.7, 482.0], [28.8, 482.0], [28.9, 490.0], [29.0, 491.0], [29.1, 491.0], [29.2, 491.0], [29.3, 495.0], [29.4, 507.0], [29.5, 507.0], [29.6, 514.0], [29.7, 517.0], [29.8, 518.0], [29.9, 518.0], [30.0, 521.0], [30.1, 523.0], [30.2, 523.0], [30.3, 523.0], [30.4, 525.0], [30.5, 528.0], [30.6, 528.0], [30.7, 529.0], [30.8, 530.0], [30.9, 532.0], [31.0, 532.0], [31.1, 533.0], [31.2, 538.0], [31.3, 539.0], [31.4, 539.0], [31.5, 544.0], [31.6, 547.0], [31.7, 547.0], [31.8, 547.0], [31.9, 551.0], [32.0, 554.0], [32.1, 554.0], [32.2, 554.0], [32.3, 556.0], [32.4, 556.0], [32.5, 556.0], [32.6, 556.0], [32.7, 558.0], [32.8, 559.0], [32.9, 559.0], [33.0, 560.0], [33.1, 562.0], [33.2, 562.0], [33.3, 562.0], [33.4, 563.0], [33.5, 563.0], [33.6, 563.0], [33.7, 565.0], [33.8, 565.0], [33.9, 568.0], [34.0, 568.0], [34.1, 569.0], [34.2, 570.0], [34.3, 572.0], [34.4, 572.0], [34.5, 573.0], [34.6, 574.0], [34.7, 575.0], [34.8, 575.0], [34.9, 577.0], [35.0, 578.0], [35.1, 578.0], [35.2, 581.0], [35.3, 590.0], [35.4, 593.0], [35.5, 593.0], [35.6, 604.0], [35.7, 611.0], [35.8, 620.0], [35.9, 620.0], [36.0, 647.0], [36.1, 651.0], [36.2, 655.0], [36.3, 655.0], [36.4, 662.0], [36.5, 663.0], [36.6, 664.0], [36.7, 664.0], [36.8, 666.0], [36.9, 667.0], [37.0, 667.0], [37.1, 667.0], [37.2, 668.0], [37.3, 669.0], [37.4, 669.0], [37.5, 669.0], [37.6, 672.0], [37.7, 673.0], [37.8, 673.0], [37.9, 673.0], [38.0, 674.0], [38.1, 675.0], [38.2, 675.0], [38.3, 676.0], [38.4, 676.0], [38.5, 676.0], [38.6, 676.0], [38.7, 677.0], [38.8, 678.0], [38.9, 678.0], [39.0, 679.0], [39.1, 680.0], [39.2, 681.0], [39.3, 681.0], [39.4, 682.0], [39.5, 682.0], [39.6, 683.0], [39.7, 683.0], [39.8, 684.0], [39.9, 684.0], [40.0, 684.0], [40.1, 684.0], [40.2, 684.0], [40.3, 684.0], [40.4, 684.0], [40.5, 685.0], [40.6, 685.0], [40.7, 686.0], [40.8, 686.0], [40.9, 686.0], [41.0, 687.0], [41.1, 687.0], [41.2, 687.0], [41.3, 689.0], [41.4, 689.0], [41.5, 689.0], [41.6, 689.0], [41.7, 690.0], [41.8, 690.0], [41.9, 690.0], [42.0, 690.0], [42.1, 691.0], [42.2, 691.0], [42.3, 691.0], [42.4, 692.0], [42.5, 693.0], [42.6, 693.0], [42.7, 693.0], [42.8, 693.0], [42.9, 693.0], [43.0, 694.0], [43.1, 694.0], [43.2, 695.0], [43.3, 696.0], [43.4, 696.0], [43.5, 696.0], [43.6, 697.0], [43.7, 697.0], [43.8, 697.0], [43.9, 698.0], [44.0, 698.0], [44.1, 698.0], [44.2, 698.0], [44.3, 698.0], [44.4, 698.0], [44.5, 698.0], [44.6, 698.0], [44.7, 698.0], [44.8, 698.0], [44.9, 699.0], [45.0, 699.0], [45.1, 699.0], [45.2, 699.0], [45.3, 699.0], [45.4, 699.0], [45.5, 700.0], [45.6, 701.0], [45.7, 701.0], [45.8, 701.0], [45.9, 702.0], [46.0, 702.0], [46.1, 702.0], [46.2, 702.0], [46.3, 703.0], [46.4, 703.0], [46.5, 703.0], [46.6, 704.0], [46.7, 705.0], [46.8, 705.0], [46.9, 705.0], [47.0, 705.0], [47.1, 706.0], [47.2, 706.0], [47.3, 706.0], [47.4, 706.0], [47.5, 707.0], [47.6, 707.0], [47.7, 708.0], [47.8, 709.0], [47.9, 710.0], [48.0, 710.0], [48.1, 710.0], [48.2, 712.0], [48.3, 712.0], [48.4, 712.0], [48.5, 712.0], [48.6, 713.0], [48.7, 713.0], [48.8, 713.0], [48.9, 713.0], [49.0, 713.0], [49.1, 713.0], [49.2, 713.0], [49.3, 714.0], [49.4, 715.0], [49.5, 715.0], [49.6, 715.0], [49.7, 716.0], [49.8, 716.0], [49.9, 716.0], [50.0, 716.0], [50.1, 717.0], [50.2, 717.0], [50.3, 717.0], [50.4, 717.0], [50.5, 717.0], [50.6, 717.0], [50.7, 718.0], [50.8, 718.0], [50.9, 718.0], [51.0, 718.0], [51.1, 720.0], [51.2, 721.0], [51.3, 721.0], [51.4, 721.0], [51.5, 722.0], [51.6, 722.0], [51.7, 722.0], [51.8, 722.0], [51.9, 722.0], [52.0, 724.0], [52.1, 724.0], [52.2, 725.0], [52.3, 726.0], [52.4, 726.0], [52.5, 726.0], [52.6, 726.0], [52.7, 728.0], [52.8, 729.0], [52.9, 729.0], [53.0, 730.0], [53.1, 730.0], [53.2, 731.0], [53.3, 731.0], [53.4, 732.0], [53.5, 732.0], [53.6, 732.0], [53.7, 733.0], [53.8, 733.0], [53.9, 734.0], [54.0, 734.0], [54.1, 735.0], [54.2, 737.0], [54.3, 737.0], [54.4, 737.0], [54.5, 738.0], [54.6, 739.0], [54.7, 739.0], [54.8, 739.0], [54.9, 740.0], [55.0, 741.0], [55.1, 741.0], [55.2, 741.0], [55.3, 742.0], [55.4, 742.0], [55.5, 742.0], [55.6, 742.0], [55.7, 743.0], [55.8, 744.0], [55.9, 744.0], [56.0, 744.0], [56.1, 745.0], [56.2, 745.0], [56.3, 745.0], [56.4, 745.0], [56.5, 746.0], [56.6, 747.0], [56.7, 747.0], [56.8, 748.0], [56.9, 748.0], [57.0, 748.0], [57.1, 748.0], [57.2, 750.0], [57.3, 751.0], [57.4, 751.0], [57.5, 751.0], [57.6, 753.0], [57.7, 757.0], [57.8, 757.0], [57.9, 757.0], [58.0, 757.0], [58.1, 759.0], [58.2, 759.0], [58.3, 763.0], [58.4, 764.0], [58.5, 764.0], [58.6, 765.0], [58.7, 765.0], [58.8, 766.0], [58.9, 766.0], [59.0, 767.0], [59.1, 767.0], [59.2, 767.0], [59.3, 767.0], [59.4, 768.0], [59.5, 770.0], [59.6, 771.0], [59.7, 771.0], [59.8, 771.0], [59.9, 771.0], [60.0, 771.0], [60.1, 771.0], [60.2, 771.0], [60.3, 771.0], [60.4, 771.0], [60.5, 774.0], [60.6, 775.0], [60.7, 775.0], [60.8, 775.0], [60.9, 775.0], [61.0, 780.0], [61.1, 782.0], [61.2, 782.0], [61.3, 789.0], [61.4, 790.0], [61.5, 790.0], [61.6, 790.0], [61.7, 791.0], [61.8, 792.0], [61.9, 792.0], [62.0, 793.0], [62.1, 793.0], [62.2, 794.0], [62.3, 794.0], [62.4, 798.0], [62.5, 798.0], [62.6, 798.0], [62.7, 798.0], [62.8, 798.0], [62.9, 799.0], [63.0, 803.0], [63.1, 803.0], [63.2, 803.0], [63.3, 804.0], [63.4, 804.0], [63.5, 804.0], [63.6, 805.0], [63.7, 807.0], [63.8, 807.0], [63.9, 812.0], [64.0, 812.0], [64.1, 818.0], [64.2, 818.0], [64.3, 818.0], [64.4, 819.0], [64.5, 827.0], [64.6, 827.0], [64.7, 827.0], [64.8, 827.0], [64.9, 829.0], [65.0, 829.0], [65.1, 832.0], [65.2, 834.0], [65.3, 834.0], [65.4, 835.0], [65.5, 836.0], [65.6, 836.0], [65.7, 836.0], [65.8, 840.0], [65.9, 840.0], [66.0, 841.0], [66.1, 841.0], [66.2, 844.0], [66.3, 844.0], [66.4, 846.0], [66.5, 846.0], [66.6, 846.0], [66.7, 846.0], [66.8, 846.0], [66.9, 848.0], [67.0, 848.0], [67.1, 848.0], [67.2, 848.0], [67.3, 848.0], [67.4, 849.0], [67.5, 850.0], [67.6, 850.0], [67.7, 853.0], [67.8, 855.0], [67.9, 855.0], [68.0, 855.0], [68.1, 855.0], [68.2, 855.0], [68.3, 856.0], [68.4, 856.0], [68.5, 857.0], [68.6, 857.0], [68.7, 857.0], [68.8, 858.0], [68.9, 859.0], [69.0, 859.0], [69.1, 859.0], [69.2, 859.0], [69.3, 859.0], [69.4, 859.0], [69.5, 859.0], [69.6, 860.0], [69.7, 862.0], [69.8, 862.0], [69.9, 862.0], [70.0, 863.0], [70.1, 863.0], [70.2, 863.0], [70.3, 864.0], [70.4, 864.0], [70.5, 864.0], [70.6, 864.0], [70.7, 866.0], [70.8, 868.0], [70.9, 871.0], [71.0, 871.0], [71.1, 871.0], [71.2, 871.0], [71.3, 872.0], [71.4, 872.0], [71.5, 872.0], [71.6, 873.0], [71.7, 873.0], [71.8, 874.0], [71.9, 875.0], [72.0, 878.0], [72.1, 878.0], [72.2, 878.0], [72.3, 880.0], [72.4, 881.0], [72.5, 881.0], [72.6, 882.0], [72.7, 882.0], [72.8, 883.0], [72.9, 883.0], [73.0, 884.0], [73.1, 884.0], [73.2, 884.0], [73.3, 884.0], [73.4, 885.0], [73.5, 886.0], [73.6, 886.0], [73.7, 887.0], [73.8, 887.0], [73.9, 888.0], [74.0, 888.0], [74.1, 889.0], [74.2, 889.0], [74.3, 891.0], [74.4, 891.0], [74.5, 894.0], [74.6, 896.0], [74.7, 896.0], [74.8, 896.0], [74.9, 897.0], [75.0, 899.0], [75.1, 899.0], [75.2, 899.0], [75.3, 900.0], [75.4, 900.0], [75.5, 900.0], [75.6, 901.0], [75.7, 901.0], [75.8, 902.0], [75.9, 902.0], [76.0, 902.0], [76.1, 906.0], [76.2, 906.0], [76.3, 906.0], [76.4, 908.0], [76.5, 909.0], [76.6, 909.0], [76.7, 909.0], [76.8, 912.0], [76.9, 913.0], [77.0, 913.0], [77.1, 915.0], [77.2, 916.0], [77.3, 916.0], [77.4, 916.0], [77.5, 917.0], [77.6, 919.0], [77.7, 919.0], [77.8, 919.0], [77.9, 919.0], [78.0, 922.0], [78.1, 923.0], [78.2, 923.0], [78.3, 924.0], [78.4, 925.0], [78.5, 925.0], [78.6, 928.0], [78.7, 928.0], [78.8, 929.0], [78.9, 929.0], [79.0, 931.0], [79.1, 932.0], [79.2, 935.0], [79.3, 935.0], [79.4, 937.0], [79.5, 938.0], [79.6, 939.0], [79.7, 939.0], [79.8, 940.0], [79.9, 941.0], [80.0, 941.0], [80.1, 941.0], [80.2, 941.0], [80.3, 942.0], [80.4, 942.0], [80.5, 943.0], [80.6, 945.0], [80.7, 945.0], [80.8, 945.0], [80.9, 946.0], [81.0, 947.0], [81.1, 947.0], [81.2, 947.0], [81.3, 951.0], [81.4, 955.0], [81.5, 956.0], [81.6, 956.0], [81.7, 957.0], [81.8, 960.0], [81.9, 960.0], [82.0, 960.0], [82.1, 961.0], [82.2, 961.0], [82.3, 961.0], [82.4, 963.0], [82.5, 964.0], [82.6, 965.0], [82.7, 965.0], [82.8, 969.0], [82.9, 970.0], [83.0, 972.0], [83.1, 972.0], [83.2, 972.0], [83.3, 978.0], [83.4, 978.0], [83.5, 978.0], [83.6, 980.0], [83.7, 980.0], [83.8, 980.0], [83.9, 980.0], [84.0, 981.0], [84.1, 983.0], [84.2, 983.0], [84.3, 986.0], [84.4, 987.0], [84.5, 989.0], [84.6, 989.0], [84.7, 990.0], [84.8, 990.0], [84.9, 992.0], [85.0, 992.0], [85.1, 995.0], [85.2, 996.0], [85.3, 996.0], [85.4, 998.0], [85.5, 1000.0], [85.6, 1001.0], [85.7, 1001.0], [85.8, 1002.0], [85.9, 1002.0], [86.0, 1003.0], [86.1, 1003.0], [86.2, 1003.0], [86.3, 1004.0], [86.4, 1004.0], [86.5, 1004.0], [86.6, 1004.0], [86.7, 1008.0], [86.8, 1008.0], [86.9, 1009.0], [87.0, 1015.0], [87.1, 1017.0], [87.2, 1017.0], [87.3, 1019.0], [87.4, 1020.0], [87.5, 1024.0], [87.6, 1024.0], [87.7, 1026.0], [87.8, 1026.0], [87.9, 1032.0], [88.0, 1032.0], [88.1, 1033.0], [88.2, 1035.0], [88.3, 1036.0], [88.4, 1036.0], [88.5, 1039.0], [88.6, 1041.0], [88.7, 1041.0], [88.8, 1042.0], [88.9, 1042.0], [89.0, 1043.0], [89.1, 1043.0], [89.2, 1045.0], [89.3, 1048.0], [89.4, 1050.0], [89.5, 1050.0], [89.6, 1050.0], [89.7, 1054.0], [89.8, 1055.0], [89.9, 1055.0], [90.0, 1057.0], [90.1, 1061.0], [90.2, 1061.0], [90.3, 1062.0], [90.4, 1067.0], [90.5, 1070.0], [90.6, 1070.0], [90.7, 1074.0], [90.8, 1085.0], [90.9, 1089.0], [91.0, 1089.0], [91.1, 1091.0], [91.2, 1091.0], [91.3, 1092.0], [91.4, 1092.0], [91.5, 1093.0], [91.6, 1105.0], [91.7, 1105.0], [91.8, 1113.0], [91.9, 1115.0], [92.0, 1118.0], [92.1, 1118.0], [92.2, 1120.0], [92.3, 1123.0], [92.4, 1147.0], [92.5, 1147.0], [92.6, 1148.0], [92.7, 1148.0], [92.8, 1150.0], [92.9, 1150.0], [93.0, 1156.0], [93.1, 1159.0], [93.2, 1159.0], [93.3, 1159.0], [93.4, 1170.0], [93.5, 1186.0], [93.6, 1186.0], [93.7, 1187.0], [93.8, 1196.0], [93.9, 1202.0], [94.0, 1202.0], [94.1, 1212.0], [94.2, 1232.0], [94.3, 1237.0], [94.4, 1237.0], [94.5, 1250.0], [94.6, 1252.0], [94.7, 1256.0], [94.8, 1256.0], [94.9, 1257.0], [95.0, 1262.0], [95.1, 1262.0], [95.2, 1272.0], [95.3, 1288.0], [95.4, 1296.0], [95.5, 1296.0], [95.6, 1307.0], [95.7, 1310.0], [95.8, 1311.0], [95.9, 1311.0], [96.0, 1331.0], [96.1, 1332.0], [96.2, 1332.0], [96.3, 1332.0], [96.4, 1335.0], [96.5, 1343.0], [96.6, 1383.0], [96.7, 1383.0], [96.8, 1393.0], [96.9, 1395.0], [97.0, 1395.0], [97.1, 1434.0], [97.2, 1527.0], [97.3, 1527.0], [97.4, 1527.0], [97.5, 1566.0], [97.6, 1582.0], [97.7, 1584.0], [97.8, 1584.0], [97.9, 1594.0], [98.0, 1600.0], [98.1, 1651.0], [98.2, 1651.0], [98.3, 1717.0], [98.4, 1784.0], [98.5, 1784.0], [98.6, 2031.0], [98.7, 2035.0], [98.8, 2068.0], [98.9, 2068.0], [99.0, 2434.0], [99.1, 2889.0], [99.2, 3000.0], [99.3, 3000.0], [99.4, 3034.0], [99.5, 3206.0], [99.6, 3211.0], [99.7, 3211.0], [99.8, 3234.0], [99.9, 3329.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 129.0, "series": [{"data": [[600.0, 73.0], [2400.0, 1.0], [700.0, 129.0], [2800.0, 1.0], [3000.0, 2.0], [3200.0, 3.0], [200.0, 48.0], [800.0, 90.0], [3300.0, 1.0], [900.0, 75.0], [1000.0, 45.0], [1100.0, 17.0], [1200.0, 12.0], [300.0, 88.0], [1300.0, 11.0], [1400.0, 1.0], [1500.0, 6.0], [400.0, 61.0], [100.0, 19.0], [1600.0, 2.0], [1700.0, 2.0], [500.0, 45.0], [2000.0, 3.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 498.0, "series": [{"data": [[0.0, 216.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 498.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60422318E12, "maxY": 1.0, "series": [{"data": [[1.60422324E12, 1.0], [1.60422372E12, 1.0], [1.60422342E12, 1.0], [1.60422336E12, 1.0], [1.60422354E12, 1.0], [1.60422348E12, 1.0], [1.60422318E12, 1.0], [1.60422366E12, 1.0], [1.6042236E12, 1.0], [1.6042233E12, 1.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422372E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 725.6285714285706, "minX": 1.0, "maxY": 725.6285714285706, "series": [{"data": [[1.0, 725.6285714285706]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[1.0, 725.6285714285706]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 175.33333333333334, "minX": 1.60422318E12, "maxY": 279979.31666666665, "series": [{"data": [[1.60422324E12, 190901.88333333333], [1.60422372E12, 34745.78333333333], [1.60422342E12, 279979.31666666665], [1.60422336E12, 140623.5], [1.60422354E12, 162988.18333333332], [1.60422348E12, 202408.3], [1.60422318E12, 263520.93333333335], [1.60422366E12, 223159.08333333334], [1.6042236E12, 170358.9], [1.6042233E12, 167081.03333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60422324E12, 508.78333333333336], [1.60422372E12, 175.33333333333334], [1.60422342E12, 794.6833333333333], [1.60422336E12, 581.4333333333333], [1.60422354E12, 551.55], [1.60422348E12, 621.95], [1.60422318E12, 490.8666666666667], [1.60422366E12, 746.9333333333333], [1.6042236E12, 544.8833333333333], [1.6042233E12, 506.6166666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422372E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 425.67999999999995, "minX": 1.60422318E12, "maxY": 897.0447761194031, "series": [{"data": [[1.60422324E12, 895.0298507462687], [1.60422372E12, 425.67999999999995], [1.60422342E12, 565.1869158878502], [1.60422336E12, 771.4415584415585], [1.60422354E12, 818.6164383561643], [1.60422348E12, 722.3012048192769], [1.60422318E12, 663.7384615384617], [1.60422366E12, 611.5757575757576], [1.6042236E12, 824.3194444444443], [1.6042233E12, 897.0447761194031]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422372E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 425.12, "minX": 1.60422318E12, "maxY": 895.4179104477612, "series": [{"data": [[1.60422324E12, 893.6119402985075], [1.60422372E12, 425.12], [1.60422342E12, 563.9158878504672], [1.60422336E12, 770.2207792207793], [1.60422354E12, 817.5753424657537], [1.60422348E12, 721.1927710843374], [1.60422318E12, 662.3692307692306], [1.60422366E12, 610.5555555555555], [1.6042236E12, 823.0555555555557], [1.6042233E12, 895.4179104477612]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422372E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60422318E12, "maxY": 0.6000000000000001, "series": [{"data": [[1.60422324E12, 0.02985074626865672], [1.60422372E12, 0.0], [1.60422342E12, 0.01869158878504673], [1.60422336E12, 0.038961038961038974], [1.60422354E12, 0.027397260273972608], [1.60422348E12, 0.036144578313253004], [1.60422318E12, 0.6000000000000001], [1.60422366E12, 0.020202020202020207], [1.6042236E12, 0.027777777777777783], [1.6042233E12, 0.02985074626865672]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422372E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 171.0, "minX": 1.60422318E12, "maxY": 3329.0, "series": [{"data": [[1.60422324E12, 2889.0], [1.60422372E12, 1148.0], [1.60422342E12, 3206.0], [1.60422336E12, 3034.0], [1.60422354E12, 1147.0], [1.60422348E12, 2434.0], [1.60422318E12, 3234.0], [1.60422366E12, 2068.0], [1.6042236E12, 1196.0], [1.6042233E12, 3329.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60422324E12, 311.0], [1.60422372E12, 298.0], [1.60422342E12, 171.0], [1.60422336E12, 415.0], [1.60422354E12, 647.0], [1.60422348E12, 187.0], [1.60422318E12, 187.0], [1.60422366E12, 200.0], [1.6042236E12, 315.0], [1.6042233E12, 681.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60422324E12, 311.0], [1.60422372E12, 298.0], [1.60422342E12, 171.06920001029968], [1.60422336E12, 415.0], [1.60422354E12, 647.0], [1.60422348E12, 187.0], [1.60422318E12, 187.0], [1.60422366E12, 200.0], [1.6042236E12, 315.0], [1.6042233E12, 681.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60422324E12, 311.0], [1.60422372E12, 298.0], [1.60422342E12, 171.0259999871254], [1.60422336E12, 415.0], [1.60422354E12, 647.0], [1.60422348E12, 187.0], [1.60422318E12, 187.0], [1.60422366E12, 200.0], [1.6042236E12, 315.0], [1.6042233E12, 681.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60422324E12, 311.0], [1.60422372E12, 298.0], [1.60422342E12, 171.0], [1.60422336E12, 415.0], [1.60422354E12, 647.0], [1.60422348E12, 187.0], [1.60422318E12, 187.0], [1.60422366E12, 200.0], [1.6042236E12, 315.0], [1.6042233E12, 681.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60422324E12, 774.0], [1.60422372E12, 320.0], [1.60422342E12, 347.0], [1.60422336E12, 771.0], [1.60422354E12, 767.0], [1.60422348E12, 700.0], [1.60422318E12, 559.0], [1.60422366E12, 449.0], [1.6042236E12, 848.0], [1.6042233E12, 840.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422372E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 190.0, "minX": 1.0, "maxY": 871.0, "series": [{"data": [[1.0, 871.0], [2.0, 693.0], [4.0, 211.0], [5.0, 190.0], [3.0, 326.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 189.0, "minX": 1.0, "maxY": 870.0, "series": [{"data": [[1.0, 870.0], [2.0, 692.5], [4.0, 211.0], [5.0, 189.0], [3.0, 325.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.4, "minX": 1.60422318E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60422324E12, 1.1166666666666667], [1.60422372E12, 0.4], [1.60422342E12, 1.7833333333333334], [1.60422336E12, 1.2833333333333334], [1.60422354E12, 1.2166666666666666], [1.60422348E12, 1.3833333333333333], [1.60422318E12, 1.1], [1.60422366E12, 1.65], [1.6042236E12, 1.2], [1.6042233E12, 1.1166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422372E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.60422318E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60422324E12, 1.1166666666666667], [1.60422372E12, 0.4166666666666667], [1.60422342E12, 1.7833333333333334], [1.60422336E12, 1.2833333333333334], [1.60422354E12, 1.2166666666666666], [1.60422348E12, 1.3833333333333333], [1.60422318E12, 1.0833333333333333], [1.60422366E12, 1.65], [1.6042236E12, 1.2], [1.6042233E12, 1.1166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60422372E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.60422318E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60422324E12, 1.1166666666666667], [1.60422372E12, 0.4166666666666667], [1.60422342E12, 1.7833333333333334], [1.60422336E12, 1.2833333333333334], [1.60422354E12, 1.2166666666666666], [1.60422348E12, 1.3833333333333333], [1.60422318E12, 1.0833333333333333], [1.60422366E12, 1.65], [1.6042236E12, 1.2], [1.6042233E12, 1.1166666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422372E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.4166666666666667, "minX": 1.60422318E12, "maxY": 1.7833333333333334, "series": [{"data": [[1.60422324E12, 1.1166666666666667], [1.60422372E12, 0.4166666666666667], [1.60422342E12, 1.7833333333333334], [1.60422336E12, 1.2833333333333334], [1.60422354E12, 1.2166666666666666], [1.60422348E12, 1.3833333333333333], [1.60422318E12, 1.0833333333333333], [1.60422366E12, 1.65], [1.6042236E12, 1.2], [1.6042233E12, 1.1166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60422372E12, "title": "Total Transactions Per Second"}},
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

