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
        data: {"result": {"minY": 2364.0, "minX": 0.0, "maxY": 8363.0, "series": [{"data": [[0.0, 2364.0], [0.1, 2364.0], [0.2, 2387.0], [0.3, 2744.0], [0.4, 2744.0], [0.5, 2763.0], [0.6, 2774.0], [0.7, 2830.0], [0.8, 2830.0], [0.9, 2894.0], [1.0, 2922.0], [1.1, 2935.0], [1.2, 2935.0], [1.3, 2972.0], [1.4, 3002.0], [1.5, 3071.0], [1.6, 3071.0], [1.7, 3081.0], [1.8, 3084.0], [1.9, 3084.0], [2.0, 3104.0], [2.1, 3115.0], [2.2, 3145.0], [2.3, 3145.0], [2.4, 3148.0], [2.5, 3155.0], [2.6, 3180.0], [2.7, 3180.0], [2.8, 3181.0], [2.9, 3194.0], [3.0, 3200.0], [3.1, 3200.0], [3.2, 3206.0], [3.3, 3209.0], [3.4, 3209.0], [3.5, 3212.0], [3.6, 3216.0], [3.7, 3222.0], [3.8, 3222.0], [3.9, 3223.0], [4.0, 3225.0], [4.1, 3226.0], [4.2, 3226.0], [4.3, 3236.0], [4.4, 3237.0], [4.5, 3264.0], [4.6, 3264.0], [4.7, 3280.0], [4.8, 3287.0], [4.9, 3294.0], [5.0, 3294.0], [5.1, 3294.0], [5.2, 3295.0], [5.3, 3295.0], [5.4, 3301.0], [5.5, 3311.0], [5.6, 3334.0], [5.7, 3334.0], [5.8, 3336.0], [5.9, 3342.0], [6.0, 3359.0], [6.1, 3359.0], [6.2, 3368.0], [6.3, 3373.0], [6.4, 3380.0], [6.5, 3380.0], [6.6, 3386.0], [6.7, 3391.0], [6.8, 3391.0], [6.9, 3392.0], [7.0, 3392.0], [7.1, 3403.0], [7.2, 3403.0], [7.3, 3413.0], [7.4, 3426.0], [7.5, 3443.0], [7.6, 3443.0], [7.7, 3445.0], [7.8, 3451.0], [7.9, 3465.0], [8.0, 3465.0], [8.1, 3466.0], [8.2, 3468.0], [8.3, 3475.0], [8.4, 3475.0], [8.5, 3475.0], [8.6, 3475.0], [8.7, 3475.0], [8.8, 3479.0], [8.9, 3488.0], [9.0, 3492.0], [9.1, 3492.0], [9.2, 3494.0], [9.3, 3494.0], [9.4, 3495.0], [9.5, 3495.0], [9.6, 3495.0], [9.7, 3498.0], [9.8, 3498.0], [9.9, 3498.0], [10.0, 3499.0], [10.1, 3501.0], [10.2, 3501.0], [10.3, 3505.0], [10.4, 3510.0], [10.5, 3525.0], [10.6, 3525.0], [10.7, 3529.0], [10.8, 3531.0], [10.9, 3547.0], [11.0, 3547.0], [11.1, 3552.0], [11.2, 3568.0], [11.3, 3573.0], [11.4, 3573.0], [11.5, 3583.0], [11.6, 3589.0], [11.7, 3589.0], [11.8, 3597.0], [11.9, 3598.0], [12.0, 3604.0], [12.1, 3604.0], [12.2, 3613.0], [12.3, 3620.0], [12.4, 3621.0], [12.5, 3621.0], [12.6, 3625.0], [12.7, 3628.0], [12.8, 3632.0], [12.9, 3632.0], [13.0, 3637.0], [13.1, 3637.0], [13.2, 3641.0], [13.3, 3641.0], [13.4, 3642.0], [13.5, 3675.0], [13.6, 3675.0], [13.7, 3678.0], [13.8, 3678.0], [13.9, 3679.0], [14.0, 3679.0], [14.1, 3680.0], [14.2, 3682.0], [14.3, 3687.0], [14.4, 3687.0], [14.5, 3690.0], [14.6, 3695.0], [14.7, 3696.0], [14.8, 3696.0], [14.9, 3699.0], [15.0, 3723.0], [15.1, 3723.0], [15.2, 3725.0], [15.3, 3726.0], [15.4, 3728.0], [15.5, 3728.0], [15.6, 3745.0], [15.7, 3762.0], [15.8, 3788.0], [15.9, 3788.0], [16.0, 3789.0], [16.1, 3794.0], [16.2, 3821.0], [16.3, 3821.0], [16.4, 3832.0], [16.5, 3839.0], [16.6, 3844.0], [16.7, 3844.0], [16.8, 3895.0], [16.9, 3901.0], [17.0, 3901.0], [17.1, 3903.0], [17.2, 3906.0], [17.3, 3918.0], [17.4, 3918.0], [17.5, 3923.0], [17.6, 3933.0], [17.7, 3935.0], [17.8, 3935.0], [17.9, 3942.0], [18.0, 3969.0], [18.1, 3977.0], [18.2, 3977.0], [18.3, 3988.0], [18.4, 3996.0], [18.5, 3996.0], [18.6, 3997.0], [18.7, 3998.0], [18.8, 3999.0], [18.9, 3999.0], [19.0, 4008.0], [19.1, 4010.0], [19.2, 4016.0], [19.3, 4016.0], [19.4, 4018.0], [19.5, 4022.0], [19.6, 4026.0], [19.7, 4026.0], [19.8, 4029.0], [19.9, 4032.0], [20.0, 4032.0], [20.1, 4034.0], [20.2, 4034.0], [20.3, 4039.0], [20.4, 4039.0], [20.5, 4041.0], [20.6, 4043.0], [20.7, 4051.0], [20.8, 4051.0], [20.9, 4069.0], [21.0, 4083.0], [21.1, 4089.0], [21.2, 4089.0], [21.3, 4096.0], [21.4, 4113.0], [21.5, 4115.0], [21.6, 4115.0], [21.7, 4135.0], [21.8, 4142.0], [21.9, 4142.0], [22.0, 4145.0], [22.1, 4155.0], [22.2, 4158.0], [22.3, 4158.0], [22.4, 4161.0], [22.5, 4175.0], [22.6, 4180.0], [22.7, 4180.0], [22.8, 4181.0], [22.9, 4181.0], [23.0, 4186.0], [23.1, 4186.0], [23.2, 4200.0], [23.3, 4212.0], [23.4, 4212.0], [23.5, 4214.0], [23.6, 4216.0], [23.7, 4219.0], [23.8, 4219.0], [23.9, 4232.0], [24.0, 4241.0], [24.1, 4254.0], [24.2, 4254.0], [24.3, 4259.0], [24.4, 4259.0], [24.5, 4260.0], [24.6, 4260.0], [24.7, 4266.0], [24.8, 4268.0], [24.9, 4270.0], [25.0, 4270.0], [25.1, 4279.0], [25.2, 4280.0], [25.3, 4280.0], [25.4, 4292.0], [25.5, 4295.0], [25.6, 4295.0], [25.7, 4295.0], [25.8, 4312.0], [25.9, 4316.0], [26.0, 4319.0], [26.1, 4319.0], [26.2, 4340.0], [26.3, 4340.0], [26.4, 4359.0], [26.5, 4359.0], [26.6, 4362.0], [26.7, 4365.0], [26.8, 4365.0], [26.9, 4368.0], [27.0, 4372.0], [27.1, 4386.0], [27.2, 4386.0], [27.3, 4390.0], [27.4, 4395.0], [27.5, 4397.0], [27.6, 4397.0], [27.7, 4398.0], [27.8, 4404.0], [27.9, 4420.0], [28.0, 4420.0], [28.1, 4420.0], [28.2, 4433.0], [28.3, 4435.0], [28.4, 4435.0], [28.5, 4438.0], [28.6, 4448.0], [28.7, 4448.0], [28.8, 4460.0], [28.9, 4465.0], [29.0, 4469.0], [29.1, 4469.0], [29.2, 4482.0], [29.3, 4483.0], [29.4, 4511.0], [29.5, 4511.0], [29.6, 4511.0], [29.7, 4513.0], [29.8, 4513.0], [29.9, 4513.0], [30.0, 4515.0], [30.1, 4518.0], [30.2, 4518.0], [30.3, 4527.0], [30.4, 4530.0], [30.5, 4530.0], [30.6, 4530.0], [30.7, 4538.0], [30.8, 4546.0], [30.9, 4563.0], [31.0, 4563.0], [31.1, 4580.0], [31.2, 4582.0], [31.3, 4589.0], [31.4, 4589.0], [31.5, 4598.0], [31.6, 4609.0], [31.7, 4609.0], [31.8, 4620.0], [31.9, 4622.0], [32.0, 4645.0], [32.1, 4645.0], [32.2, 4651.0], [32.3, 4656.0], [32.4, 4662.0], [32.5, 4662.0], [32.6, 4668.0], [32.7, 4679.0], [32.8, 4679.0], [32.9, 4679.0], [33.0, 4687.0], [33.1, 4690.0], [33.2, 4693.0], [33.3, 4693.0], [33.4, 4714.0], [33.5, 4723.0], [33.6, 4723.0], [33.7, 4740.0], [33.8, 4744.0], [33.9, 4748.0], [34.0, 4748.0], [34.1, 4749.0], [34.2, 4755.0], [34.3, 4756.0], [34.4, 4756.0], [34.5, 4756.0], [34.6, 4756.0], [34.7, 4778.0], [34.8, 4778.0], [34.9, 4783.0], [35.0, 4783.0], [35.1, 4783.0], [35.2, 4783.0], [35.3, 4787.0], [35.4, 4796.0], [35.5, 4796.0], [35.6, 4808.0], [35.7, 4815.0], [35.8, 4823.0], [35.9, 4823.0], [36.0, 4844.0], [36.1, 4849.0], [36.2, 4862.0], [36.3, 4862.0], [36.4, 4863.0], [36.5, 4876.0], [36.6, 4876.0], [36.7, 4876.0], [36.8, 4878.0], [36.9, 4887.0], [37.0, 4887.0], [37.1, 4903.0], [37.2, 4905.0], [37.3, 4905.0], [37.4, 4905.0], [37.5, 4920.0], [37.6, 4925.0], [37.7, 4933.0], [37.8, 4933.0], [37.9, 4936.0], [38.0, 4945.0], [38.1, 4952.0], [38.2, 4952.0], [38.3, 4954.0], [38.4, 4955.0], [38.5, 4955.0], [38.6, 4961.0], [38.7, 4971.0], [38.8, 4984.0], [38.9, 4984.0], [39.0, 4990.0], [39.1, 4994.0], [39.2, 4996.0], [39.3, 4996.0], [39.4, 5007.0], [39.5, 5008.0], [39.6, 5012.0], [39.7, 5012.0], [39.8, 5024.0], [39.9, 5025.0], [40.0, 5040.0], [40.1, 5040.0], [40.2, 5050.0], [40.3, 5068.0], [40.4, 5068.0], [40.5, 5078.0], [40.6, 5079.0], [40.7, 5080.0], [40.8, 5080.0], [40.9, 5086.0], [41.0, 5091.0], [41.1, 5096.0], [41.2, 5096.0], [41.3, 5100.0], [41.4, 5101.0], [41.5, 5108.0], [41.6, 5108.0], [41.7, 5109.0], [41.8, 5112.0], [41.9, 5112.0], [42.0, 5115.0], [42.1, 5118.0], [42.2, 5121.0], [42.3, 5121.0], [42.4, 5122.0], [42.5, 5126.0], [42.6, 5130.0], [42.7, 5130.0], [42.8, 5132.0], [42.9, 5135.0], [43.0, 5137.0], [43.1, 5137.0], [43.2, 5141.0], [43.3, 5147.0], [43.4, 5147.0], [43.5, 5150.0], [43.6, 5151.0], [43.7, 5160.0], [43.8, 5160.0], [43.9, 5161.0], [44.0, 5174.0], [44.1, 5187.0], [44.2, 5187.0], [44.3, 5188.0], [44.4, 5194.0], [44.5, 5194.0], [44.6, 5194.0], [44.7, 5195.0], [44.8, 5196.0], [44.9, 5196.0], [45.0, 5196.0], [45.1, 5199.0], [45.2, 5201.0], [45.3, 5201.0], [45.4, 5205.0], [45.5, 5205.0], [45.6, 5213.0], [45.7, 5213.0], [45.8, 5214.0], [45.9, 5232.0], [46.0, 5233.0], [46.1, 5233.0], [46.2, 5235.0], [46.3, 5241.0], [46.4, 5243.0], [46.5, 5243.0], [46.6, 5243.0], [46.7, 5247.0], [46.8, 5247.0], [46.9, 5257.0], [47.0, 5258.0], [47.1, 5272.0], [47.2, 5272.0], [47.3, 5275.0], [47.4, 5279.0], [47.5, 5279.0], [47.6, 5279.0], [47.7, 5284.0], [47.8, 5288.0], [47.9, 5292.0], [48.0, 5292.0], [48.1, 5301.0], [48.2, 5306.0], [48.3, 5311.0], [48.4, 5311.0], [48.5, 5315.0], [48.6, 5316.0], [48.7, 5316.0], [48.8, 5318.0], [48.9, 5320.0], [49.0, 5329.0], [49.1, 5329.0], [49.2, 5340.0], [49.3, 5350.0], [49.4, 5350.0], [49.5, 5350.0], [49.6, 5355.0], [49.7, 5358.0], [49.8, 5359.0], [49.9, 5359.0], [50.0, 5359.0], [50.1, 5359.0], [50.2, 5359.0], [50.3, 5363.0], [50.4, 5364.0], [50.5, 5364.0], [50.6, 5364.0], [50.7, 5367.0], [50.8, 5370.0], [50.9, 5381.0], [51.0, 5381.0], [51.1, 5386.0], [51.2, 5398.0], [51.3, 5401.0], [51.4, 5401.0], [51.5, 5404.0], [51.6, 5406.0], [51.7, 5406.0], [51.8, 5408.0], [51.9, 5410.0], [52.0, 5411.0], [52.1, 5411.0], [52.2, 5412.0], [52.3, 5413.0], [52.4, 5414.0], [52.5, 5414.0], [52.6, 5414.0], [52.7, 5419.0], [52.8, 5422.0], [52.9, 5422.0], [53.0, 5426.0], [53.1, 5429.0], [53.2, 5431.0], [53.3, 5431.0], [53.4, 5434.0], [53.5, 5435.0], [53.6, 5435.0], [53.7, 5435.0], [53.8, 5436.0], [53.9, 5437.0], [54.0, 5437.0], [54.1, 5441.0], [54.2, 5442.0], [54.3, 5443.0], [54.4, 5443.0], [54.5, 5444.0], [54.6, 5444.0], [54.7, 5445.0], [54.8, 5445.0], [54.9, 5446.0], [55.0, 5448.0], [55.1, 5448.0], [55.2, 5450.0], [55.3, 5451.0], [55.4, 5451.0], [55.5, 5451.0], [55.6, 5452.0], [55.7, 5452.0], [55.8, 5454.0], [55.9, 5454.0], [56.0, 5455.0], [56.1, 5456.0], [56.2, 5458.0], [56.3, 5458.0], [56.4, 5460.0], [56.5, 5463.0], [56.6, 5467.0], [56.7, 5467.0], [56.8, 5469.0], [56.9, 5470.0], [57.0, 5470.0], [57.1, 5470.0], [57.2, 5474.0], [57.3, 5475.0], [57.4, 5475.0], [57.5, 5476.0], [57.6, 5482.0], [57.7, 5484.0], [57.8, 5484.0], [57.9, 5488.0], [58.0, 5490.0], [58.1, 5492.0], [58.2, 5492.0], [58.3, 5493.0], [58.4, 5495.0], [58.5, 5495.0], [58.6, 5499.0], [58.7, 5499.0], [58.8, 5500.0], [58.9, 5500.0], [59.0, 5503.0], [59.1, 5505.0], [59.2, 5506.0], [59.3, 5506.0], [59.4, 5510.0], [59.5, 5513.0], [59.6, 5514.0], [59.7, 5514.0], [59.8, 5515.0], [59.9, 5523.0], [60.0, 5525.0], [60.1, 5525.0], [60.2, 5526.0], [60.3, 5529.0], [60.4, 5529.0], [60.5, 5530.0], [60.6, 5533.0], [60.7, 5533.0], [60.8, 5533.0], [60.9, 5538.0], [61.0, 5540.0], [61.1, 5544.0], [61.2, 5544.0], [61.3, 5545.0], [61.4, 5552.0], [61.5, 5569.0], [61.6, 5569.0], [61.7, 5571.0], [61.8, 5571.0], [61.9, 5571.0], [62.0, 5577.0], [62.1, 5577.0], [62.2, 5578.0], [62.3, 5578.0], [62.4, 5578.0], [62.5, 5580.0], [62.6, 5590.0], [62.7, 5590.0], [62.8, 5593.0], [62.9, 5597.0], [63.0, 5599.0], [63.1, 5599.0], [63.2, 5602.0], [63.3, 5605.0], [63.4, 5605.0], [63.5, 5606.0], [63.6, 5617.0], [63.7, 5620.0], [63.8, 5620.0], [63.9, 5622.0], [64.0, 5627.0], [64.1, 5628.0], [64.2, 5628.0], [64.3, 5632.0], [64.4, 5634.0], [64.5, 5640.0], [64.6, 5640.0], [64.7, 5642.0], [64.8, 5643.0], [64.9, 5643.0], [65.0, 5643.0], [65.1, 5643.0], [65.2, 5643.0], [65.3, 5643.0], [65.4, 5648.0], [65.5, 5651.0], [65.6, 5656.0], [65.7, 5656.0], [65.8, 5656.0], [65.9, 5657.0], [66.0, 5664.0], [66.1, 5664.0], [66.2, 5665.0], [66.3, 5665.0], [66.4, 5668.0], [66.5, 5668.0], [66.6, 5669.0], [66.7, 5672.0], [66.8, 5672.0], [66.9, 5677.0], [67.0, 5678.0], [67.1, 5679.0], [67.2, 5679.0], [67.3, 5687.0], [67.4, 5688.0], [67.5, 5691.0], [67.6, 5691.0], [67.7, 5695.0], [67.8, 5702.0], [67.9, 5703.0], [68.0, 5703.0], [68.1, 5706.0], [68.2, 5710.0], [68.3, 5715.0], [68.4, 5715.0], [68.5, 5717.0], [68.6, 5722.0], [68.7, 5722.0], [68.8, 5723.0], [68.9, 5724.0], [69.0, 5727.0], [69.1, 5727.0], [69.2, 5728.0], [69.3, 5729.0], [69.4, 5730.0], [69.5, 5730.0], [69.6, 5734.0], [69.7, 5737.0], [69.8, 5738.0], [69.9, 5738.0], [70.0, 5740.0], [70.1, 5755.0], [70.2, 5755.0], [70.3, 5757.0], [70.4, 5758.0], [70.5, 5763.0], [70.6, 5763.0], [70.7, 5766.0], [70.8, 5766.0], [70.9, 5769.0], [71.0, 5769.0], [71.1, 5770.0], [71.2, 5773.0], [71.3, 5775.0], [71.4, 5775.0], [71.5, 5782.0], [71.6, 5783.0], [71.7, 5783.0], [71.8, 5784.0], [71.9, 5784.0], [72.0, 5789.0], [72.1, 5789.0], [72.2, 5789.0], [72.3, 5791.0], [72.4, 5799.0], [72.5, 5799.0], [72.6, 5801.0], [72.7, 5801.0], [72.8, 5801.0], [72.9, 5801.0], [73.0, 5803.0], [73.1, 5806.0], [73.2, 5808.0], [73.3, 5808.0], [73.4, 5809.0], [73.5, 5810.0], [73.6, 5810.0], [73.7, 5811.0], [73.8, 5813.0], [73.9, 5819.0], [74.0, 5819.0], [74.1, 5820.0], [74.2, 5820.0], [74.3, 5821.0], [74.4, 5821.0], [74.5, 5823.0], [74.6, 5825.0], [74.7, 5826.0], [74.8, 5826.0], [74.9, 5827.0], [75.0, 5831.0], [75.1, 5831.0], [75.2, 5833.0], [75.3, 5833.0], [75.4, 5833.0], [75.5, 5833.0], [75.6, 5836.0], [75.7, 5837.0], [75.8, 5840.0], [75.9, 5840.0], [76.0, 5841.0], [76.1, 5843.0], [76.2, 5846.0], [76.3, 5846.0], [76.4, 5864.0], [76.5, 5867.0], [76.6, 5869.0], [76.7, 5869.0], [76.8, 5877.0], [76.9, 5878.0], [77.0, 5878.0], [77.1, 5879.0], [77.2, 5882.0], [77.3, 5894.0], [77.4, 5894.0], [77.5, 5894.0], [77.6, 5897.0], [77.7, 5898.0], [77.8, 5898.0], [77.9, 5914.0], [78.0, 5915.0], [78.1, 5918.0], [78.2, 5918.0], [78.3, 5918.0], [78.4, 5920.0], [78.5, 5920.0], [78.6, 5921.0], [78.7, 5931.0], [78.8, 5935.0], [78.9, 5935.0], [79.0, 5937.0], [79.1, 5938.0], [79.2, 5948.0], [79.3, 5948.0], [79.4, 5950.0], [79.5, 5952.0], [79.6, 5953.0], [79.7, 5953.0], [79.8, 5953.0], [79.9, 5954.0], [80.0, 5956.0], [80.1, 5956.0], [80.2, 5964.0], [80.3, 5972.0], [80.4, 5972.0], [80.5, 5973.0], [80.6, 5975.0], [80.7, 5975.0], [80.8, 5975.0], [80.9, 5983.0], [81.0, 5984.0], [81.1, 5986.0], [81.2, 5986.0], [81.3, 5997.0], [81.4, 6005.0], [81.5, 6011.0], [81.6, 6011.0], [81.7, 6020.0], [81.8, 6021.0], [81.9, 6021.0], [82.0, 6022.0], [82.1, 6027.0], [82.2, 6033.0], [82.3, 6033.0], [82.4, 6035.0], [82.5, 6039.0], [82.6, 6044.0], [82.7, 6044.0], [82.8, 6046.0], [82.9, 6048.0], [83.0, 6056.0], [83.1, 6056.0], [83.2, 6057.0], [83.3, 6060.0], [83.4, 6060.0], [83.5, 6062.0], [83.6, 6063.0], [83.7, 6063.0], [83.8, 6063.0], [83.9, 6066.0], [84.0, 6066.0], [84.1, 6068.0], [84.2, 6068.0], [84.3, 6093.0], [84.4, 6109.0], [84.5, 6109.0], [84.6, 6109.0], [84.7, 6112.0], [84.8, 6121.0], [84.9, 6122.0], [85.0, 6122.0], [85.1, 6127.0], [85.2, 6134.0], [85.3, 6134.0], [85.4, 6136.0], [85.5, 6138.0], [85.6, 6141.0], [85.7, 6141.0], [85.8, 6160.0], [85.9, 6165.0], [86.0, 6166.0], [86.1, 6166.0], [86.2, 6166.0], [86.3, 6172.0], [86.4, 6191.0], [86.5, 6191.0], [86.6, 6194.0], [86.7, 6196.0], [86.8, 6196.0], [86.9, 6196.0], [87.0, 6197.0], [87.1, 6202.0], [87.2, 6202.0], [87.3, 6203.0], [87.4, 6227.0], [87.5, 6251.0], [87.6, 6251.0], [87.7, 6275.0], [87.8, 6324.0], [87.9, 6343.0], [88.0, 6343.0], [88.1, 6349.0], [88.2, 6364.0], [88.3, 6385.0], [88.4, 6385.0], [88.5, 6401.0], [88.6, 6418.0], [88.7, 6418.0], [88.8, 6440.0], [88.9, 6475.0], [89.0, 6477.0], [89.1, 6477.0], [89.2, 6479.0], [89.3, 6492.0], [89.4, 6497.0], [89.5, 6497.0], [89.6, 6505.0], [89.7, 6511.0], [89.8, 6543.0], [89.9, 6543.0], [90.0, 6571.0], [90.1, 6605.0], [90.2, 6605.0], [90.3, 6654.0], [90.4, 6654.0], [90.5, 6658.0], [90.6, 6658.0], [90.7, 6713.0], [90.8, 6722.0], [90.9, 6731.0], [91.0, 6731.0], [91.1, 6791.0], [91.2, 6825.0], [91.3, 6836.0], [91.4, 6836.0], [91.5, 6840.0], [91.6, 6864.0], [91.7, 6864.0], [91.8, 6895.0], [91.9, 6995.0], [92.0, 7022.0], [92.1, 7022.0], [92.2, 7120.0], [92.3, 7129.0], [92.4, 7138.0], [92.5, 7138.0], [92.6, 7155.0], [92.7, 7161.0], [92.8, 7171.0], [92.9, 7171.0], [93.0, 7222.0], [93.1, 7229.0], [93.2, 7260.0], [93.3, 7260.0], [93.4, 7315.0], [93.5, 7318.0], [93.6, 7318.0], [93.7, 7323.0], [93.8, 7331.0], [93.9, 7335.0], [94.0, 7335.0], [94.1, 7393.0], [94.2, 7398.0], [94.3, 7404.0], [94.4, 7404.0], [94.5, 7409.0], [94.6, 7443.0], [94.7, 7458.0], [94.8, 7458.0], [94.9, 7476.0], [95.0, 7519.0], [95.1, 7519.0], [95.2, 7527.0], [95.3, 7556.0], [95.4, 7576.0], [95.5, 7576.0], [95.6, 7605.0], [95.7, 7630.0], [95.8, 7636.0], [95.9, 7636.0], [96.0, 7649.0], [96.1, 7651.0], [96.2, 7665.0], [96.3, 7665.0], [96.4, 7704.0], [96.5, 7716.0], [96.6, 7718.0], [96.7, 7718.0], [96.8, 7720.0], [96.9, 7751.0], [97.0, 7751.0], [97.1, 7787.0], [97.2, 7807.0], [97.3, 7847.0], [97.4, 7847.0], [97.5, 7848.0], [97.6, 7854.0], [97.7, 7859.0], [97.8, 7859.0], [97.9, 7860.0], [98.0, 7926.0], [98.1, 7961.0], [98.2, 7961.0], [98.3, 7963.0], [98.4, 7964.0], [98.5, 7964.0], [98.6, 7967.0], [98.7, 7972.0], [98.8, 7983.0], [98.9, 7983.0], [99.0, 8030.0], [99.1, 8034.0], [99.2, 8102.0], [99.3, 8102.0], [99.4, 8147.0], [99.5, 8178.0], [99.6, 8219.0], [99.7, 8219.0], [99.8, 8362.0], [99.9, 8363.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2300.0, "maxY": 55.0, "series": [{"data": [[2300.0, 2.0], [2700.0, 3.0], [2800.0, 2.0], [2900.0, 3.0], [3000.0, 4.0], [3100.0, 8.0], [3300.0, 13.0], [3200.0, 17.0], [3400.0, 22.0], [3500.0, 14.0], [3600.0, 22.0], [3700.0, 9.0], [3800.0, 5.0], [3900.0, 15.0], [4000.0, 18.0], [4300.0, 15.0], [4100.0, 13.0], [4200.0, 19.0], [4500.0, 16.0], [4400.0, 12.0], [4600.0, 13.0], [4700.0, 16.0], [4800.0, 11.0], [5000.0, 14.0], [5100.0, 29.0], [4900.0, 17.0], [5300.0, 24.0], [5200.0, 21.0], [5400.0, 55.0], [5600.0, 34.0], [5500.0, 32.0], [5800.0, 39.0], [5700.0, 35.0], [5900.0, 26.0], [6000.0, 22.0], [6100.0, 20.0], [6200.0, 5.0], [6300.0, 5.0], [6500.0, 4.0], [6600.0, 4.0], [6400.0, 8.0], [6800.0, 5.0], [6700.0, 4.0], [6900.0, 1.0], [7100.0, 6.0], [7000.0, 1.0], [7400.0, 5.0], [7300.0, 7.0], [7200.0, 3.0], [7600.0, 6.0], [7500.0, 4.0], [7800.0, 6.0], [7700.0, 6.0], [7900.0, 7.0], [8000.0, 2.0], [8100.0, 3.0], [8200.0, 1.0], [8300.0, 2.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.60246698E12, "maxY": 12.0, "series": [{"data": [[1.60246704E12, 12.0], [1.60246722E12, 12.0], [1.6024671E12, 12.0], [1.60246728E12, 11.860000000000001], [1.60246698E12, 12.0], [1.60246716E12, 12.0], [1.60246734E12, 3.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246734E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3081.0, "minX": 1.0, "maxY": 5208.730662983428, "series": [{"data": [[8.0, 3498.0], [4.0, 3598.0], [2.0, 3628.0], [1.0, 4016.0], [9.0, 3501.0], [10.0, 3084.0], [5.0, 3597.0], [11.0, 3081.0], [12.0, 5208.730662983428], [6.0, 3525.0], [3.0, 3620.0], [7.0, 3531.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[11.910204081632651, 5183.4013605442215]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 12.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 33.93333333333333, "minX": 1.60246698E12, "maxY": 390598.61666666664, "series": [{"data": [[1.60246704E12, 388794.45], [1.60246722E12, 301771.48333333334], [1.6024671E12, 289814.9], [1.60246728E12, 325288.05], [1.60246698E12, 137668.31666666668], [1.60246716E12, 390598.61666666664], [1.60246734E12, 1824.6833333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60246704E12, 968.2666666666667], [1.60246722E12, 984.4833333333333], [1.6024671E12, 1116.45], [1.60246728E12, 1122.4333333333334], [1.60246698E12, 265.65], [1.60246716E12, 1031.8166666666666], [1.60246734E12, 33.93333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246734E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 3691.8, "minX": 1.60246698E12, "maxY": 5670.338461538464, "series": [{"data": [[1.60246704E12, 5561.835937499998], [1.60246722E12, 5670.338461538464], [1.6024671E12, 4945.209459459458], [1.60246728E12, 4871.933333333335], [1.60246698E12, 5461.571428571428], [1.60246716E12, 4952.848920863312], [1.60246734E12, 3691.8]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246734E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 3691.6, "minX": 1.60246698E12, "maxY": 5669.2538461538425, "series": [{"data": [[1.60246704E12, 5560.398437499998], [1.60246722E12, 5669.2538461538425], [1.6024671E12, 4944.270270270271], [1.60246728E12, 4870.9333333333325], [1.60246698E12, 5460.000000000001], [1.60246716E12, 4951.51798561151], [1.60246734E12, 3691.6]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246734E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.60246698E12, "maxY": 2.9999999999999987, "series": [{"data": [[1.60246704E12, 0.13281249999999994], [1.60246722E12, 0.10769230769230773], [1.6024671E12, 0.09459459459459461], [1.60246728E12, 0.09333333333333335], [1.60246698E12, 2.9999999999999987], [1.60246716E12, 0.03597122302158273], [1.60246734E12, 0.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246734E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2364.0, "minX": 1.60246698E12, "maxY": 8363.0, "series": [{"data": [[1.60246704E12, 8363.0], [1.60246722E12, 8102.0], [1.6024671E12, 6196.0], [1.60246728E12, 7315.0], [1.60246698E12, 8030.0], [1.60246716E12, 7972.0], [1.60246734E12, 4016.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60246704E12, 3156.371998400688], [1.60246722E12, 4259.178999968767], [1.6024671E12, 2371.8429991829394], [1.60246728E12, 3082.0769998919964], [1.60246698E12, 2763.0], [1.60246716E12, 2901.2799990653994], [1.60246734E12, 3597.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60246704E12, 3162.4092006397245], [1.60246722E12, 4259.296900012493], [1.6024671E12, 2374.927300326824], [1.60246728E12, 3082.4847000432014], [1.60246698E12, 2763.0], [1.60246716E12, 2904.8080003738405], [1.60246734E12, 3597.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60246704E12, 3159.725999200344], [1.60246722E12, 4259.244499984384], [1.6024671E12, 2373.5564995914697], [1.60246728E12, 3082.3034999459983], [1.60246698E12, 2763.0], [1.60246716E12, 2903.2399995326996], [1.60246734E12, 3597.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60246704E12, 3148.0], [1.60246722E12, 4259.0], [1.6024671E12, 2364.0], [1.60246728E12, 3081.0], [1.60246698E12, 2763.0], [1.60246716E12, 2894.0], [1.60246734E12, 3597.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60246704E12, 5506.5], [1.60246722E12, 5635.0], [1.6024671E12, 5393.5], [1.60246728E12, 5090.0], [1.60246698E12, 5008.0], [1.60246716E12, 4690.0], [1.60246734E12, 3620.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246734E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3930.0, "minX": 1.0, "maxY": 6166.0, "series": [{"data": [[2.0, 5542.0], [4.0, 3930.0], [1.0, 6166.0], [5.0, 6166.0], [3.0, 5301.0], [6.0, 4254.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 3930.0, "minX": 1.0, "maxY": 6166.0, "series": [{"data": [[2.0, 5541.0], [4.0, 3930.0], [1.0, 6161.0], [5.0, 6166.0], [3.0, 5300.0], [6.0, 4254.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 6.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7833333333333333, "minX": 1.60246698E12, "maxY": 2.466666666666667, "series": [{"data": [[1.60246704E12, 2.1333333333333333], [1.60246722E12, 2.1666666666666665], [1.6024671E12, 2.466666666666667], [1.60246728E12, 2.3833333333333333], [1.60246698E12, 0.7833333333333333], [1.60246716E12, 2.316666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246728E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60246698E12, "maxY": 2.5, "series": [{"data": [[1.60246704E12, 2.1333333333333333], [1.60246722E12, 2.1666666666666665], [1.6024671E12, 2.466666666666667], [1.60246728E12, 2.5], [1.60246698E12, 0.5833333333333334], [1.60246716E12, 2.316666666666667], [1.60246734E12, 0.08333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60246734E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60246698E12, "maxY": 2.5, "series": [{"data": [[1.60246704E12, 2.1333333333333333], [1.60246722E12, 2.1666666666666665], [1.6024671E12, 2.466666666666667], [1.60246728E12, 2.5], [1.60246698E12, 0.5833333333333334], [1.60246716E12, 2.316666666666667], [1.60246734E12, 0.08333333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246734E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.08333333333333333, "minX": 1.60246698E12, "maxY": 2.5, "series": [{"data": [[1.60246704E12, 2.1333333333333333], [1.60246722E12, 2.1666666666666665], [1.6024671E12, 2.466666666666667], [1.60246728E12, 2.5], [1.60246698E12, 0.5833333333333334], [1.60246716E12, 2.316666666666667], [1.60246734E12, 0.08333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60246734E12, "title": "Total Transactions Per Second"}},
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

