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
        data: {"result": {"minY": 738.0, "minX": 0.0, "maxY": 18844.0, "series": [{"data": [[0.0, 738.0], [0.1, 738.0], [0.2, 738.0], [0.3, 738.0], [0.4, 738.0], [0.5, 738.0], [0.6, 738.0], [0.7, 738.0], [0.8, 738.0], [0.9, 991.0], [1.0, 991.0], [1.1, 991.0], [1.2, 991.0], [1.3, 991.0], [1.4, 991.0], [1.5, 991.0], [1.6, 991.0], [1.7, 991.0], [1.8, 1998.0], [1.9, 1998.0], [2.0, 1998.0], [2.1, 1998.0], [2.2, 1998.0], [2.3, 1998.0], [2.4, 1998.0], [2.5, 1998.0], [2.6, 1998.0], [2.7, 2021.0], [2.8, 2021.0], [2.9, 2021.0], [3.0, 2021.0], [3.1, 2021.0], [3.2, 2021.0], [3.3, 2021.0], [3.4, 2021.0], [3.5, 2021.0], [3.6, 2376.0], [3.7, 2376.0], [3.8, 2376.0], [3.9, 2376.0], [4.0, 2376.0], [4.1, 2376.0], [4.2, 2376.0], [4.3, 2376.0], [4.4, 2376.0], [4.5, 2928.0], [4.6, 2928.0], [4.7, 2928.0], [4.8, 2928.0], [4.9, 2928.0], [5.0, 2928.0], [5.1, 2928.0], [5.2, 2928.0], [5.3, 2928.0], [5.4, 3153.0], [5.5, 3153.0], [5.6, 3153.0], [5.7, 3153.0], [5.8, 3153.0], [5.9, 3153.0], [6.0, 3153.0], [6.1, 3153.0], [6.2, 3153.0], [6.3, 3505.0], [6.4, 3505.0], [6.5, 3505.0], [6.6, 3505.0], [6.7, 3505.0], [6.8, 3505.0], [6.9, 3505.0], [7.0, 3505.0], [7.1, 3505.0], [7.2, 3552.0], [7.3, 3552.0], [7.4, 3552.0], [7.5, 3552.0], [7.6, 3552.0], [7.7, 3552.0], [7.8, 3552.0], [7.9, 3552.0], [8.0, 3552.0], [8.1, 3572.0], [8.2, 3572.0], [8.3, 3572.0], [8.4, 3572.0], [8.5, 3572.0], [8.6, 3572.0], [8.7, 3572.0], [8.8, 3572.0], [8.9, 3572.0], [9.0, 3574.0], [9.1, 3574.0], [9.2, 3574.0], [9.3, 3574.0], [9.4, 3574.0], [9.5, 3574.0], [9.6, 3574.0], [9.7, 3574.0], [9.8, 3574.0], [9.9, 3701.0], [10.0, 3701.0], [10.1, 3701.0], [10.2, 3701.0], [10.3, 3701.0], [10.4, 3701.0], [10.5, 3701.0], [10.6, 3701.0], [10.7, 3701.0], [10.8, 3764.0], [10.9, 3764.0], [11.0, 3764.0], [11.1, 3764.0], [11.2, 3764.0], [11.3, 3764.0], [11.4, 3764.0], [11.5, 3764.0], [11.6, 3764.0], [11.7, 3770.0], [11.8, 3770.0], [11.9, 3770.0], [12.0, 3770.0], [12.1, 3770.0], [12.2, 3770.0], [12.3, 3770.0], [12.4, 3770.0], [12.5, 3800.0], [12.6, 3800.0], [12.7, 3800.0], [12.8, 3800.0], [12.9, 3800.0], [13.0, 3800.0], [13.1, 3800.0], [13.2, 3800.0], [13.3, 3800.0], [13.4, 3834.0], [13.5, 3834.0], [13.6, 3834.0], [13.7, 3834.0], [13.8, 3834.0], [13.9, 3834.0], [14.0, 3834.0], [14.1, 3834.0], [14.2, 3834.0], [14.3, 3849.0], [14.4, 3849.0], [14.5, 3849.0], [14.6, 3849.0], [14.7, 3849.0], [14.8, 3849.0], [14.9, 3849.0], [15.0, 3849.0], [15.1, 3849.0], [15.2, 3866.0], [15.3, 3866.0], [15.4, 3866.0], [15.5, 3866.0], [15.6, 3866.0], [15.7, 3866.0], [15.8, 3866.0], [15.9, 3866.0], [16.0, 3866.0], [16.1, 3889.0], [16.2, 3889.0], [16.3, 3889.0], [16.4, 3889.0], [16.5, 3889.0], [16.6, 3889.0], [16.7, 3889.0], [16.8, 3889.0], [16.9, 3889.0], [17.0, 3918.0], [17.1, 3918.0], [17.2, 3918.0], [17.3, 3918.0], [17.4, 3918.0], [17.5, 3918.0], [17.6, 3918.0], [17.7, 3918.0], [17.8, 3918.0], [17.9, 4036.0], [18.0, 4036.0], [18.1, 4036.0], [18.2, 4036.0], [18.3, 4036.0], [18.4, 4036.0], [18.5, 4036.0], [18.6, 4036.0], [18.7, 4036.0], [18.8, 4066.0], [18.9, 4066.0], [19.0, 4066.0], [19.1, 4066.0], [19.2, 4066.0], [19.3, 4066.0], [19.4, 4066.0], [19.5, 4066.0], [19.6, 4066.0], [19.7, 4296.0], [19.8, 4296.0], [19.9, 4296.0], [20.0, 4296.0], [20.1, 4296.0], [20.2, 4296.0], [20.3, 4296.0], [20.4, 4296.0], [20.5, 4296.0], [20.6, 4347.0], [20.7, 4347.0], [20.8, 4347.0], [20.9, 4347.0], [21.0, 4347.0], [21.1, 4347.0], [21.2, 4347.0], [21.3, 4347.0], [21.4, 4347.0], [21.5, 4426.0], [21.6, 4426.0], [21.7, 4426.0], [21.8, 4426.0], [21.9, 4426.0], [22.0, 4426.0], [22.1, 4426.0], [22.2, 4426.0], [22.3, 4426.0], [22.4, 4428.0], [22.5, 4428.0], [22.6, 4428.0], [22.7, 4428.0], [22.8, 4428.0], [22.9, 4428.0], [23.0, 4428.0], [23.1, 4428.0], [23.2, 4428.0], [23.3, 4437.0], [23.4, 4437.0], [23.5, 4437.0], [23.6, 4437.0], [23.7, 4437.0], [23.8, 4437.0], [23.9, 4437.0], [24.0, 4437.0], [24.1, 4437.0], [24.2, 4440.0], [24.3, 4440.0], [24.4, 4440.0], [24.5, 4440.0], [24.6, 4440.0], [24.7, 4440.0], [24.8, 4440.0], [24.9, 4440.0], [25.0, 4474.0], [25.1, 4474.0], [25.2, 4474.0], [25.3, 4474.0], [25.4, 4474.0], [25.5, 4474.0], [25.6, 4474.0], [25.7, 4474.0], [25.8, 4474.0], [25.9, 4536.0], [26.0, 4536.0], [26.1, 4536.0], [26.2, 4536.0], [26.3, 4536.0], [26.4, 4536.0], [26.5, 4536.0], [26.6, 4536.0], [26.7, 4536.0], [26.8, 4546.0], [26.9, 4546.0], [27.0, 4546.0], [27.1, 4546.0], [27.2, 4546.0], [27.3, 4546.0], [27.4, 4546.0], [27.5, 4546.0], [27.6, 4546.0], [27.7, 4548.0], [27.8, 4548.0], [27.9, 4548.0], [28.0, 4548.0], [28.1, 4548.0], [28.2, 4548.0], [28.3, 4548.0], [28.4, 4548.0], [28.5, 4548.0], [28.6, 4607.0], [28.7, 4607.0], [28.8, 4607.0], [28.9, 4607.0], [29.0, 4607.0], [29.1, 4607.0], [29.2, 4607.0], [29.3, 4607.0], [29.4, 4607.0], [29.5, 4645.0], [29.6, 4645.0], [29.7, 4645.0], [29.8, 4645.0], [29.9, 4645.0], [30.0, 4645.0], [30.1, 4645.0], [30.2, 4645.0], [30.3, 4645.0], [30.4, 4764.0], [30.5, 4764.0], [30.6, 4764.0], [30.7, 4764.0], [30.8, 4764.0], [30.9, 4764.0], [31.0, 4764.0], [31.1, 4764.0], [31.2, 4764.0], [31.3, 5123.0], [31.4, 5123.0], [31.5, 5123.0], [31.6, 5123.0], [31.7, 5123.0], [31.8, 5123.0], [31.9, 5123.0], [32.0, 5123.0], [32.1, 5123.0], [32.2, 5153.0], [32.3, 5153.0], [32.4, 5153.0], [32.5, 5153.0], [32.6, 5153.0], [32.7, 5153.0], [32.8, 5153.0], [32.9, 5153.0], [33.0, 5153.0], [33.1, 5264.0], [33.2, 5264.0], [33.3, 5264.0], [33.4, 5264.0], [33.5, 5264.0], [33.6, 5264.0], [33.7, 5264.0], [33.8, 5264.0], [33.9, 5264.0], [34.0, 5310.0], [34.1, 5310.0], [34.2, 5310.0], [34.3, 5310.0], [34.4, 5310.0], [34.5, 5310.0], [34.6, 5310.0], [34.7, 5310.0], [34.8, 5310.0], [34.9, 5465.0], [35.0, 5465.0], [35.1, 5465.0], [35.2, 5465.0], [35.3, 5465.0], [35.4, 5465.0], [35.5, 5465.0], [35.6, 5465.0], [35.7, 5465.0], [35.8, 5525.0], [35.9, 5525.0], [36.0, 5525.0], [36.1, 5525.0], [36.2, 5525.0], [36.3, 5525.0], [36.4, 5525.0], [36.5, 5525.0], [36.6, 5525.0], [36.7, 5572.0], [36.8, 5572.0], [36.9, 5572.0], [37.0, 5572.0], [37.1, 5572.0], [37.2, 5572.0], [37.3, 5572.0], [37.4, 5572.0], [37.5, 5572.0], [37.6, 5652.0], [37.7, 5652.0], [37.8, 5652.0], [37.9, 5652.0], [38.0, 5652.0], [38.1, 5652.0], [38.2, 5652.0], [38.3, 5652.0], [38.4, 5694.0], [38.5, 5694.0], [38.6, 5694.0], [38.7, 5694.0], [38.8, 5694.0], [38.9, 5694.0], [39.0, 5694.0], [39.1, 5694.0], [39.2, 5694.0], [39.3, 5753.0], [39.4, 5753.0], [39.5, 5753.0], [39.6, 5753.0], [39.7, 5753.0], [39.8, 5753.0], [39.9, 5753.0], [40.0, 5753.0], [40.1, 5753.0], [40.2, 5807.0], [40.3, 5807.0], [40.4, 5807.0], [40.5, 5807.0], [40.6, 5807.0], [40.7, 5807.0], [40.8, 5807.0], [40.9, 5807.0], [41.0, 5807.0], [41.1, 5810.0], [41.2, 5810.0], [41.3, 5810.0], [41.4, 5810.0], [41.5, 5810.0], [41.6, 5810.0], [41.7, 5810.0], [41.8, 5810.0], [41.9, 5810.0], [42.0, 5847.0], [42.1, 5847.0], [42.2, 5847.0], [42.3, 5847.0], [42.4, 5847.0], [42.5, 5847.0], [42.6, 5847.0], [42.7, 5847.0], [42.8, 5847.0], [42.9, 6015.0], [43.0, 6015.0], [43.1, 6015.0], [43.2, 6015.0], [43.3, 6015.0], [43.4, 6015.0], [43.5, 6015.0], [43.6, 6015.0], [43.7, 6015.0], [43.8, 6061.0], [43.9, 6061.0], [44.0, 6061.0], [44.1, 6061.0], [44.2, 6061.0], [44.3, 6061.0], [44.4, 6061.0], [44.5, 6061.0], [44.6, 6061.0], [44.7, 6083.0], [44.8, 6083.0], [44.9, 6083.0], [45.0, 6083.0], [45.1, 6083.0], [45.2, 6083.0], [45.3, 6083.0], [45.4, 6083.0], [45.5, 6083.0], [45.6, 6264.0], [45.7, 6264.0], [45.8, 6264.0], [45.9, 6264.0], [46.0, 6264.0], [46.1, 6264.0], [46.2, 6264.0], [46.3, 6264.0], [46.4, 6264.0], [46.5, 6355.0], [46.6, 6355.0], [46.7, 6355.0], [46.8, 6355.0], [46.9, 6355.0], [47.0, 6355.0], [47.1, 6355.0], [47.2, 6355.0], [47.3, 6355.0], [47.4, 6463.0], [47.5, 6463.0], [47.6, 6463.0], [47.7, 6463.0], [47.8, 6463.0], [47.9, 6463.0], [48.0, 6463.0], [48.1, 6463.0], [48.2, 6463.0], [48.3, 6477.0], [48.4, 6477.0], [48.5, 6477.0], [48.6, 6477.0], [48.7, 6477.0], [48.8, 6477.0], [48.9, 6477.0], [49.0, 6477.0], [49.1, 6477.0], [49.2, 6565.0], [49.3, 6565.0], [49.4, 6565.0], [49.5, 6565.0], [49.6, 6565.0], [49.7, 6565.0], [49.8, 6565.0], [49.9, 6565.0], [50.0, 6565.0], [50.1, 6739.0], [50.2, 6739.0], [50.3, 6739.0], [50.4, 6739.0], [50.5, 6739.0], [50.6, 6739.0], [50.7, 6739.0], [50.8, 6739.0], [50.9, 6848.0], [51.0, 6848.0], [51.1, 6848.0], [51.2, 6848.0], [51.3, 6848.0], [51.4, 6848.0], [51.5, 6848.0], [51.6, 6848.0], [51.7, 6848.0], [51.8, 6889.0], [51.9, 6889.0], [52.0, 6889.0], [52.1, 6889.0], [52.2, 6889.0], [52.3, 6889.0], [52.4, 6889.0], [52.5, 6889.0], [52.6, 6889.0], [52.7, 6918.0], [52.8, 6918.0], [52.9, 6918.0], [53.0, 6918.0], [53.1, 6918.0], [53.2, 6918.0], [53.3, 6918.0], [53.4, 6918.0], [53.5, 6918.0], [53.6, 6949.0], [53.7, 6949.0], [53.8, 6949.0], [53.9, 6949.0], [54.0, 6949.0], [54.1, 6949.0], [54.2, 6949.0], [54.3, 6949.0], [54.4, 6949.0], [54.5, 6960.0], [54.6, 6960.0], [54.7, 6960.0], [54.8, 6960.0], [54.9, 6960.0], [55.0, 6960.0], [55.1, 6960.0], [55.2, 6960.0], [55.3, 6960.0], [55.4, 6991.0], [55.5, 6991.0], [55.6, 6991.0], [55.7, 6991.0], [55.8, 6991.0], [55.9, 6991.0], [56.0, 6991.0], [56.1, 6991.0], [56.2, 6991.0], [56.3, 7199.0], [56.4, 7199.0], [56.5, 7199.0], [56.6, 7199.0], [56.7, 7199.0], [56.8, 7199.0], [56.9, 7199.0], [57.0, 7199.0], [57.1, 7199.0], [57.2, 7204.0], [57.3, 7204.0], [57.4, 7204.0], [57.5, 7204.0], [57.6, 7204.0], [57.7, 7204.0], [57.8, 7204.0], [57.9, 7204.0], [58.0, 7204.0], [58.1, 7306.0], [58.2, 7306.0], [58.3, 7306.0], [58.4, 7306.0], [58.5, 7306.0], [58.6, 7306.0], [58.7, 7306.0], [58.8, 7306.0], [58.9, 7306.0], [59.0, 7475.0], [59.1, 7475.0], [59.2, 7475.0], [59.3, 7475.0], [59.4, 7475.0], [59.5, 7475.0], [59.6, 7475.0], [59.7, 7475.0], [59.8, 7475.0], [59.9, 7827.0], [60.0, 7827.0], [60.1, 7827.0], [60.2, 7827.0], [60.3, 7827.0], [60.4, 7827.0], [60.5, 7827.0], [60.6, 7827.0], [60.7, 7827.0], [60.8, 8421.0], [60.9, 8421.0], [61.0, 8421.0], [61.1, 8421.0], [61.2, 8421.0], [61.3, 8421.0], [61.4, 8421.0], [61.5, 8421.0], [61.6, 8421.0], [61.7, 8590.0], [61.8, 8590.0], [61.9, 8590.0], [62.0, 8590.0], [62.1, 8590.0], [62.2, 8590.0], [62.3, 8590.0], [62.4, 8590.0], [62.5, 8590.0], [62.6, 8829.0], [62.7, 8829.0], [62.8, 8829.0], [62.9, 8829.0], [63.0, 8829.0], [63.1, 8829.0], [63.2, 8829.0], [63.3, 8829.0], [63.4, 8895.0], [63.5, 8895.0], [63.6, 8895.0], [63.7, 8895.0], [63.8, 8895.0], [63.9, 8895.0], [64.0, 8895.0], [64.1, 8895.0], [64.2, 8895.0], [64.3, 9125.0], [64.4, 9125.0], [64.5, 9125.0], [64.6, 9125.0], [64.7, 9125.0], [64.8, 9125.0], [64.9, 9125.0], [65.0, 9125.0], [65.1, 9125.0], [65.2, 9147.0], [65.3, 9147.0], [65.4, 9147.0], [65.5, 9147.0], [65.6, 9147.0], [65.7, 9147.0], [65.8, 9147.0], [65.9, 9147.0], [66.0, 9147.0], [66.1, 9182.0], [66.2, 9182.0], [66.3, 9182.0], [66.4, 9182.0], [66.5, 9182.0], [66.6, 9182.0], [66.7, 9182.0], [66.8, 9182.0], [66.9, 9182.0], [67.0, 9182.0], [67.1, 9182.0], [67.2, 9182.0], [67.3, 9182.0], [67.4, 9182.0], [67.5, 9182.0], [67.6, 9182.0], [67.7, 9182.0], [67.8, 9182.0], [67.9, 9198.0], [68.0, 9198.0], [68.1, 9198.0], [68.2, 9198.0], [68.3, 9198.0], [68.4, 9198.0], [68.5, 9198.0], [68.6, 9198.0], [68.7, 9198.0], [68.8, 9264.0], [68.9, 9264.0], [69.0, 9264.0], [69.1, 9264.0], [69.2, 9264.0], [69.3, 9264.0], [69.4, 9264.0], [69.5, 9264.0], [69.6, 9264.0], [69.7, 9335.0], [69.8, 9335.0], [69.9, 9335.0], [70.0, 9335.0], [70.1, 9335.0], [70.2, 9335.0], [70.3, 9335.0], [70.4, 9335.0], [70.5, 9335.0], [70.6, 9359.0], [70.7, 9359.0], [70.8, 9359.0], [70.9, 9359.0], [71.0, 9359.0], [71.1, 9359.0], [71.2, 9359.0], [71.3, 9359.0], [71.4, 9359.0], [71.5, 9566.0], [71.6, 9566.0], [71.7, 9566.0], [71.8, 9566.0], [71.9, 9566.0], [72.0, 9566.0], [72.1, 9566.0], [72.2, 9566.0], [72.3, 9566.0], [72.4, 9569.0], [72.5, 9569.0], [72.6, 9569.0], [72.7, 9569.0], [72.8, 9569.0], [72.9, 9569.0], [73.0, 9569.0], [73.1, 9569.0], [73.2, 9569.0], [73.3, 9714.0], [73.4, 9714.0], [73.5, 9714.0], [73.6, 9714.0], [73.7, 9714.0], [73.8, 9714.0], [73.9, 9714.0], [74.0, 9714.0], [74.1, 9714.0], [74.2, 9766.0], [74.3, 9766.0], [74.4, 9766.0], [74.5, 9766.0], [74.6, 9766.0], [74.7, 9766.0], [74.8, 9766.0], [74.9, 9766.0], [75.0, 9766.0], [75.1, 9774.0], [75.2, 9774.0], [75.3, 9774.0], [75.4, 9774.0], [75.5, 9774.0], [75.6, 9774.0], [75.7, 9774.0], [75.8, 9774.0], [75.9, 9944.0], [76.0, 9944.0], [76.1, 9944.0], [76.2, 9944.0], [76.3, 9944.0], [76.4, 9944.0], [76.5, 9944.0], [76.6, 9944.0], [76.7, 9944.0], [76.8, 10072.0], [76.9, 10072.0], [77.0, 10072.0], [77.1, 10072.0], [77.2, 10072.0], [77.3, 10072.0], [77.4, 10072.0], [77.5, 10072.0], [77.6, 10072.0], [77.7, 10103.0], [77.8, 10103.0], [77.9, 10103.0], [78.0, 10103.0], [78.1, 10103.0], [78.2, 10103.0], [78.3, 10103.0], [78.4, 10103.0], [78.5, 10103.0], [78.6, 11399.0], [78.7, 11399.0], [78.8, 11399.0], [78.9, 11399.0], [79.0, 11399.0], [79.1, 11399.0], [79.2, 11399.0], [79.3, 11399.0], [79.4, 11399.0], [79.5, 11690.0], [79.6, 11690.0], [79.7, 11690.0], [79.8, 11690.0], [79.9, 11690.0], [80.0, 11690.0], [80.1, 11690.0], [80.2, 11690.0], [80.3, 11690.0], [80.4, 11692.0], [80.5, 11692.0], [80.6, 11692.0], [80.7, 11692.0], [80.8, 11692.0], [80.9, 11692.0], [81.0, 11692.0], [81.1, 11692.0], [81.2, 11692.0], [81.3, 11716.0], [81.4, 11716.0], [81.5, 11716.0], [81.6, 11716.0], [81.7, 11716.0], [81.8, 11716.0], [81.9, 11716.0], [82.0, 11716.0], [82.1, 11716.0], [82.2, 11897.0], [82.3, 11897.0], [82.4, 11897.0], [82.5, 11897.0], [82.6, 11897.0], [82.7, 11897.0], [82.8, 11897.0], [82.9, 11897.0], [83.0, 11897.0], [83.1, 11949.0], [83.2, 11949.0], [83.3, 11949.0], [83.4, 11949.0], [83.5, 11949.0], [83.6, 11949.0], [83.7, 11949.0], [83.8, 11949.0], [83.9, 11949.0], [84.0, 12384.0], [84.1, 12384.0], [84.2, 12384.0], [84.3, 12384.0], [84.4, 12384.0], [84.5, 12384.0], [84.6, 12384.0], [84.7, 12384.0], [84.8, 12384.0], [84.9, 12409.0], [85.0, 12409.0], [85.1, 12409.0], [85.2, 12409.0], [85.3, 12409.0], [85.4, 12409.0], [85.5, 12409.0], [85.6, 12409.0], [85.7, 12409.0], [85.8, 12421.0], [85.9, 12421.0], [86.0, 12421.0], [86.1, 12421.0], [86.2, 12421.0], [86.3, 12421.0], [86.4, 12421.0], [86.5, 12421.0], [86.6, 12421.0], [86.7, 12587.0], [86.8, 12587.0], [86.9, 12587.0], [87.0, 12587.0], [87.1, 12587.0], [87.2, 12587.0], [87.3, 12587.0], [87.4, 12587.0], [87.5, 12747.0], [87.6, 12747.0], [87.7, 12747.0], [87.8, 12747.0], [87.9, 12747.0], [88.0, 12747.0], [88.1, 12747.0], [88.2, 12747.0], [88.3, 12747.0], [88.4, 12887.0], [88.5, 12887.0], [88.6, 12887.0], [88.7, 12887.0], [88.8, 12887.0], [88.9, 12887.0], [89.0, 12887.0], [89.1, 12887.0], [89.2, 12887.0], [89.3, 13048.0], [89.4, 13048.0], [89.5, 13048.0], [89.6, 13048.0], [89.7, 13048.0], [89.8, 13048.0], [89.9, 13048.0], [90.0, 13048.0], [90.1, 13048.0], [90.2, 13064.0], [90.3, 13064.0], [90.4, 13064.0], [90.5, 13064.0], [90.6, 13064.0], [90.7, 13064.0], [90.8, 13064.0], [90.9, 13064.0], [91.0, 13064.0], [91.1, 14830.0], [91.2, 14830.0], [91.3, 14830.0], [91.4, 14830.0], [91.5, 14830.0], [91.6, 14830.0], [91.7, 14830.0], [91.8, 14830.0], [91.9, 14830.0], [92.0, 14983.0], [92.1, 14983.0], [92.2, 14983.0], [92.3, 14983.0], [92.4, 14983.0], [92.5, 14983.0], [92.6, 14983.0], [92.7, 14983.0], [92.8, 14983.0], [92.9, 15008.0], [93.0, 15008.0], [93.1, 15008.0], [93.2, 15008.0], [93.3, 15008.0], [93.4, 15008.0], [93.5, 15008.0], [93.6, 15008.0], [93.7, 15008.0], [93.8, 15594.0], [93.9, 15594.0], [94.0, 15594.0], [94.1, 15594.0], [94.2, 15594.0], [94.3, 15594.0], [94.4, 15594.0], [94.5, 15594.0], [94.6, 15594.0], [94.7, 16158.0], [94.8, 16158.0], [94.9, 16158.0], [95.0, 16158.0], [95.1, 16158.0], [95.2, 16158.0], [95.3, 16158.0], [95.4, 16158.0], [95.5, 16158.0], [95.6, 16897.0], [95.7, 16897.0], [95.8, 16897.0], [95.9, 16897.0], [96.0, 16897.0], [96.1, 16897.0], [96.2, 16897.0], [96.3, 16897.0], [96.4, 16897.0], [96.5, 17654.0], [96.6, 17654.0], [96.7, 17654.0], [96.8, 17654.0], [96.9, 17654.0], [97.0, 17654.0], [97.1, 17654.0], [97.2, 17654.0], [97.3, 17654.0], [97.4, 17783.0], [97.5, 17783.0], [97.6, 17783.0], [97.7, 17783.0], [97.8, 17783.0], [97.9, 17783.0], [98.0, 17783.0], [98.1, 17783.0], [98.2, 17783.0], [98.3, 18621.0], [98.4, 18621.0], [98.5, 18621.0], [98.6, 18621.0], [98.7, 18621.0], [98.8, 18621.0], [98.9, 18621.0], [99.0, 18621.0], [99.1, 18621.0], [99.2, 18844.0], [99.3, 18844.0], [99.4, 18844.0], [99.5, 18844.0], [99.6, 18844.0], [99.7, 18844.0], [99.8, 18844.0], [99.9, 18844.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 700.0, "maxY": 5.0, "series": [{"data": [[700.0, 1.0], [900.0, 1.0], [1900.0, 1.0], [2000.0, 1.0], [2300.0, 1.0], [2900.0, 1.0], [3100.0, 1.0], [3500.0, 4.0], [3700.0, 3.0], [3800.0, 5.0], [3900.0, 1.0], [4000.0, 2.0], [4300.0, 1.0], [4200.0, 1.0], [4500.0, 3.0], [4600.0, 2.0], [4400.0, 5.0], [4700.0, 1.0], [5100.0, 2.0], [5300.0, 1.0], [5200.0, 1.0], [5500.0, 2.0], [5600.0, 2.0], [5400.0, 1.0], [5700.0, 1.0], [5800.0, 3.0], [6000.0, 3.0], [6200.0, 1.0], [6300.0, 1.0], [6400.0, 2.0], [6500.0, 1.0], [6700.0, 1.0], [6800.0, 2.0], [6900.0, 4.0], [7100.0, 1.0], [7400.0, 1.0], [7200.0, 1.0], [7300.0, 1.0], [7800.0, 1.0], [8400.0, 1.0], [8500.0, 1.0], [9200.0, 1.0], [9100.0, 5.0], [8800.0, 2.0], [9500.0, 2.0], [9300.0, 2.0], [9700.0, 3.0], [9900.0, 1.0], [10100.0, 1.0], [10000.0, 1.0], [11600.0, 2.0], [11300.0, 1.0], [11700.0, 1.0], [11800.0, 1.0], [11900.0, 1.0], [12700.0, 1.0], [12400.0, 2.0], [12500.0, 1.0], [12300.0, 1.0], [13000.0, 2.0], [12800.0, 1.0], [14800.0, 1.0], [15000.0, 1.0], [14900.0, 1.0], [15500.0, 1.0], [16100.0, 1.0], [16800.0, 1.0], [17600.0, 1.0], [17700.0, 1.0], [18600.0, 1.0], [18800.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 2.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 110.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 2.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 110.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 9.18181818181818, "minX": 1.60440498E12, "maxY": 10.0, "series": [{"data": [[1.60440504E12, 9.18181818181818], [1.60440498E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440504E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 2376.0, "minX": 1.0, "maxY": 11949.0, "series": [{"data": [[8.0, 2376.0], [4.0, 3849.0], [2.0, 5264.0], [1.0, 11949.0], [9.0, 7306.0], [10.0, 7867.466019417479], [5.0, 5847.0], [6.0, 3153.0], [3.0, 6355.0], [7.0, 5807.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.598214285714285, 7698.70535714286]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 712.6333333333333, "minX": 1.60440498E12, "maxY": 2305299.15, "series": [{"data": [[1.60440504E12, 1612322.9], [1.60440498E12, 2305299.15]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60440504E12, 712.6333333333333], [1.60440498E12, 768.3]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440504E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 6661.981818181818, "minX": 1.60440498E12, "maxY": 8699.052631578952, "series": [{"data": [[1.60440504E12, 6661.981818181818], [1.60440498E12, 8699.052631578952]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440504E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 6649.6909090909085, "minX": 1.60440498E12, "maxY": 8686.38596491228, "series": [{"data": [[1.60440504E12, 6649.6909090909085], [1.60440498E12, 8686.38596491228]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440504E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.2181818181818181, "minX": 1.60440498E12, "maxY": 1.5087719298245617, "series": [{"data": [[1.60440504E12, 0.2181818181818181], [1.60440498E12, 1.5087719298245617]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440504E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 738.0, "minX": 1.60440498E12, "maxY": 18844.0, "series": [{"data": [[1.60440504E12, 18844.0], [1.60440498E12, 18621.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60440504E12, 1998.0], [1.60440498E12, 738.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60440504E12, 1998.0], [1.60440498E12, 738.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60440504E12, 1998.0], [1.60440498E12, 738.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60440504E12, 1998.0], [1.60440498E12, 738.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60440504E12, 6015.0], [1.60440498E12, 8421.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440504E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4645.0, "minX": 1.0, "maxY": 7255.0, "series": [{"data": [[2.0, 6521.0], [1.0, 6889.0], [4.0, 7255.0], [3.0, 4645.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4638.0, "minX": 1.0, "maxY": 7249.5, "series": [{"data": [[2.0, 6516.0], [1.0, 6886.0], [4.0, 7249.5], [3.0, 4638.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 4.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.75, "minX": 1.60440498E12, "maxY": 1.1166666666666667, "series": [{"data": [[1.60440504E12, 0.75], [1.60440498E12, 1.1166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440504E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60440498E12, "maxY": 0.95, "series": [{"data": [[1.60440504E12, 0.9166666666666666], [1.60440498E12, 0.95]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60440504E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60440498E12, "maxY": 0.95, "series": [{"data": [[1.60440504E12, 0.9166666666666666], [1.60440498E12, 0.95]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440504E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.9166666666666666, "minX": 1.60440498E12, "maxY": 0.95, "series": [{"data": [[1.60440504E12, 0.9166666666666666], [1.60440498E12, 0.95]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60440504E12, "title": "Total Transactions Per Second"}},
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

