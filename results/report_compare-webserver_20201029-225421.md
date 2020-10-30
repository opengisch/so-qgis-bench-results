# QGIS Benchmark summary compare-webserver (20201029-225421)


compare different webservers in front of of 3.10

_run completed in 00h 03m 03s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-webserver_20201029-225421_plot.html)

## Summary
| name           | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-nginx  | Global  |                 38.5 | +0.0%                        |          174.3 | +0.0%                  |          8087.5 | +2.0%                   |         5144 |        11559 |            72 |            0 |     4308.7 |    3905.4  |     3781.3 |      53.7 |   33.9333 |      24.8 |          0 |
| qgis310-caddy  | Global  |                 40   | +3.9%                        |          178.2 | +2.2%                  |          8271   | +4.3%                   |         5346 |        11598 |            72 |            0 |     4464.5 |    3926.63 |     3734.4 |      55.2 |   30.9    |      12.9 |          0 |
| qgis310-apache | Global  |                 41.1 | +6.8%                        |          177.8 | +2.0%                  |          7930.5 | +0.0%                   |         3928 |        13403 |            72 |            0 |     4385.4 |    3931.07 |     3763.7 |      61.3 |   29.4    |      12.6 |          0 |

## Aggregated
| name                                         | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-apache > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 16.5 | +0.0%                        |           92.2 | +0.0%                  |          4183   | +0.0%                   |         2934 |         5635 |            22 |            0 |     4385.4 |     4033.2 |     3805.1 |      61.3 |      30.8 |      25.4 |          0 |
| qgis310-caddy > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 16.6 | +0.6%                        |           93.1 | +1.0%                  |          4325.5 | +3.4%                   |         2900 |         5585 |            22 |            0 |     4464.5 |     4026.5 |     3800.5 |      48.1 |      30.2 |      24.9 |          0 |
| qgis310-nginx > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 16.9 | +2.4%                        |           96   | +4.1%                  |          4356   | +4.1%                   |         3320 |         5915 |            22 |            0 |     4308.7 |     3980.3 |     3781.3 |      50.4 |      30.9 |      25.1 |          0 |
| qgis310-nginx > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 14   | +0.0%                        |           64.1 | +0.0%                  |          3278.5 | +1.7%                   |         1639 |         4723 |            20 |            0 |     4111.7 |     3937.1 |     3837.5 |      53.7 |      31.3 |      24.8 |          0 |
| qgis310-caddy > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 15.6 | +11.4%                       |           67.2 | +4.9%                  |          3418   | +6.1%                   |         1990 |         5061 |            20 |            0 |     4093.9 |     3963.6 |     3881.8 |      55.2 |      29.6 |      12.9 |          0 |
| qgis310-apache > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 16.7 | +19.3%                       |           69.8 | +8.9%                  |          3223   | +0.0%                   |          844 |         6795 |            20 |            0 |     4138.8 |     3954.2 |     3819.8 |      43.6 |      25.2 |      12.6 |          0 |
| qgis310-nginx > somap310_lk                  | somap_lk                 |                  7.6 | +0.0%                        |           14.2 | +0.0%                  |           453   | +0.0%                   |          185 |          921 |            30 |            0 |     3798.8 |     3798.8 |     3798.8 |      39.6 |      39.6 |      39.6 |          0 |
| qgis310-caddy > somap310_lk                  | somap_lk                 |                  7.8 | +2.6%                        |           17.9 | +25.9%                 |           527.5 | +16.4%                  |          456 |          952 |            30 |            0 |     3818.4 |     3789.8 |     3734.4 |      36.9 |      32.9 |      28   |          0 |
| qgis310-apache > somap310_lk                 | somap_lk                 |                  7.9 | +3.9%                        |           15.8 | +11.2%                 |           524.5 | +15.8%                  |          150 |          973 |            30 |            0 |     3827.1 |     3805.8 |     3763.7 |      37.1 |      32.2 |      24.1 |          0 |

## Detail
| name                                                                                                                                                                                     | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-apache > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201029-225421/qgis310-apache/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 16.5 | +0.0%                        |           92.2 | +0.0%                  |          4183   | +0.0%                   |            22 |            0 |          0 |      4190.09  |         2934 |         5635 |        5203.3 |       5581.9  |          5635 |      1.99746 |                260.514 |           0.851189 |     4385.4 |     4033.2 |     3805.1 |      61.3 |      30.8 |      25.4 |
| [qgis310-caddy > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201029-225421/qgis310-caddy/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 16.6 | +0.6%                        |           93.1 | +1.0%                  |          4325.5 | +3.4%                   |            22 |            0 |          0 |      4230.14  |         2900 |         5585 |        5376.6 |       5578.4  |          5585 |      2.00383 |                261.266 |           0.853903 |     4464.5 |     4026.5 |     3800.5 |      48.1 |      30.2 |      24.9 |
| [qgis310-nginx > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201029-225421/qgis310-nginx/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 16.9 | +2.4%                        |           96   | +4.1%                  |          4356   | +4.1%                   |            22 |            0 |          0 |      4361.95  |         3320 |         5915 |        5525.1 |       5876.45 |          5915 |      1.94656 |                253.816 |           0.829499 |     4308.7 |     3980.3 |     3781.3 |      50.4 |      30.9 |      25.1 |
| [qgis310-nginx > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201029-225421/qgis310-nginx/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 14   | +0.0%                        |           64.1 | +0.0%                  |          3278.5 | +1.7%                   |            20 |            0 |          0 |      3205.1   |         1639 |         4723 |        4307.7 |       4702.4  |          4723 |      2.39837 |                746.249 |           1.00432  |     4111.7 |     3937.1 |     3837.5 |      53.7 |      31.3 |      24.8 |
| [qgis310-caddy > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201029-225421/qgis310-caddy/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 15.6 | +11.4%                       |           67.2 | +4.9%                  |          3418   | +6.1%                   |            20 |            0 |          0 |      3360.7   |         1990 |         5061 |        4570.9 |       5038.15 |          5061 |      2.00481 |                623.775 |           0.839515 |     4093.9 |     3963.6 |     3881.8 |      55.2 |      29.6 |      12.9 |
| [qgis310-apache > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201029-225421/qgis310-apache/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 16.7 | +19.3%                       |           69.8 | +8.9%                  |          3223   | +0.0%                   |            20 |            0 |          0 |      3489.15  |          844 |         6795 |        6390.7 |       6778.95 |          6795 |      1.78317 |                554.885 |           0.746701 |     4138.8 |     3954.2 |     3819.8 |      43.6 |      25.2 |      12.6 |
| [qgis310-nginx > somap310_lk > lk.txt](../results/details/compare-webserver/20201029-225421/qgis310-nginx/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  7.6 | +0.0%                        |           14.2 | +0.0%                  |           453   | +0.0%                   |            30 |            0 |          0 |       474.1   |          185 |          921 |         766.7 |        890.2  |           921 |     15.0981  |                409.263 |           6.15918  |     3798.8 |     3798.8 |     3798.8 |      39.6 |      39.6 |      39.6 |
| [qgis310-caddy > somap310_lk > lk.txt](../results/details/compare-webserver/20201029-225421/qgis310-caddy/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  7.8 | +2.6%                        |           17.9 | +25.9%                 |           527.5 | +16.4%                  |            30 |            0 |          0 |       596.967 |          456 |          952 |         886.2 |        917.35 |           952 |     12.7823  |                346.375 |           5.21444  |     3818.4 |     3789.8 |     3734.4 |      36.9 |      32.9 |      28   |
| [qgis310-apache > somap310_lk > lk.txt](../results/details/compare-webserver/20201029-225421/qgis310-apache/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7.9 | +3.9%                        |           15.8 | +11.2%                 |           524.5 | +15.8%                  |            30 |            0 |          0 |       527     |          150 |          973 |         892.5 |        940.55 |           973 |     12.9702  |                351.977 |           5.29109  |     3827.1 |     3805.8 |     3763.7 |      37.1 |      32.2 |      24.1 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different webservers in front of of 3.10'

test-cases:
  qgis310-nginx:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis310-apache:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-apache


  qgis310-caddy:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-caddy

```
### parsed test configurations

```
description: compare different webservers in front of of 3.10
test-cases:
  qgis310-apache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-apache
  qgis310-caddy:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-nginx
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-proxy-qgis-3-caddy
  qgis310-nginx:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '2'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```