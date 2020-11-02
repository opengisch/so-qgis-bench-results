# QGIS Benchmark summary compare-webserver (20201101-092121)


compare different webservers in front of of 3.10

_run completed in 00h 04m 26s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-webserver_20201101-092121_plot.html)

## Summary
| name           | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-nginx  | Global  |                 40   | +0.0%                        |          181.8 | +1.3%                  |            8239 | +0.7%                   |         5822 |        11559 |            72 |            0 |     5250.8 |    4743.77 |     4557.1 |      51.2 |   31.7333 |      24.4 |          0 |
| qgis310-caddy  | Global  |                 40.7 | +1.8%                        |          180.9 | +0.8%                  |            8184 | +0.0%                   |         5631 |        11900 |            72 |            0 |     5001.5 |    4785.47 |     4647.7 |      55.1 |   31.2    |      12.8 |          0 |
| qgis310-apache | Global  |                 40.9 | +2.3%                        |          179.4 | +0.0%                  |            8464 | +3.4%                   |         5005 |        11982 |            72 |            0 |     5300.7 |    4788.57 |     4613.7 |      60.5 |   30.3667 |      13   |          0 |

## Aggregated
| name                                         | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-apache > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 16.6 | +0.0%                        |           92.8 | +0.0%                  |          4306.5 | +1.7%                   |         2940 |         5471 |            22 |            0 |     5300.7 |     4920.7 |     4650.7 |      60.5 |      30.5 |      25.1 |          0 |
| qgis310-caddy > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 16.8 | +1.2%                        |           94.6 | +1.9%                  |          4235   | +0.0%                   |         3057 |         5893 |            22 |            0 |     5001.5 |     4885.4 |     4703.1 |      55.1 |      30.4 |      25   |          0 |
| qgis310-nginx > somap310_grundplanav_farbig  | somap_grundplanav_farbig |                 17.4 | +4.8%                        |           98.5 | +6.2%                  |          4383.5 | +3.5%                   |         3551 |         6098 |            22 |            0 |     5250.8 |     4811.7 |     4625.6 |      48.6 |      31.1 |      24.4 |          0 |
| qgis310-nginx > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 14.6 | +0.0%                        |           68.1 | +0.6%                  |          3367.5 | +0.0%                   |         2018 |         4527 |            20 |            0 |     5034.4 |     4801.8 |     4712.3 |      51.2 |      31.5 |      24.9 |          0 |
| qgis310-caddy > somap310_grundplanav_sw      | somap_grundplanav_sw     |                 15.7 | +7.5%                        |           67.7 | +0.0%                  |          3417.5 | +1.5%                   |         2098 |         5003 |            20 |            0 |     4977.7 |     4813.8 |     4727.8 |      46.9 |      29.1 |      12.8 |          0 |
| qgis310-apache > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 16.1 | +10.3%                       |           70.3 | +3.8%                  |          3612.5 | +7.3%                   |         1965 |         5441 |            20 |            0 |     4851.2 |     4791.6 |     4720.9 |      55.4 |      27.9 |      13   |          0 |
| qgis310-nginx > somap310_lk                  | somap_lk                 |                  8   | +0.0%                        |           15.1 | +0.0%                  |           488   | +0.0%                   |          253 |          934 |            30 |            0 |     4655.6 |     4617.8 |     4557.1 |      36.1 |      32.6 |      27.5 |          0 |
| qgis310-apache > somap310_lk                 | somap_lk                 |                  8.2 | +2.5%                        |           16.3 | +7.8%                  |           545   | +11.7%                  |          100 |         1070 |            30 |            0 |     4676.1 |     4653.4 |     4613.7 |      39.1 |      32.7 |      23.2 |          0 |
| qgis310-caddy > somap310_lk                  | somap_lk                 |                  8.2 | +2.5%                        |           18.6 | +23.0%                 |           531.5 | +8.9%                   |          476 |         1004 |            30 |            0 |     4666.7 |     4657.2 |     4647.7 |      38.9 |      34.1 |      29.3 |          0 |

## Detail
| name                                                                                                                                                                                     | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-apache > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201101-092121/qgis310-apache/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 16.6 | +0.0%                        |           92.8 | +0.0%                  |          4306.5 | +1.7%                   |            22 |            0 |          0 |      4217.91  |         2940 |         5471 |        5279.9 |       5468.75 |          5471 |      1.99964 |                260.799 |           0.852118 |     5300.7 |     4920.7 |     4650.7 |      60.5 |      30.5 |      25.1 |
| [qgis310-caddy > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201101-092121/qgis310-caddy/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 16.8 | +1.2%                        |           94.6 | +1.9%                  |          4235   | +0.0%                   |            22 |            0 |          0 |      4298.18  |         3057 |         5893 |        5477.7 |       5844.7  |          5893 |      1.95764 |                255.244 |           0.834223 |     5001.5 |     4885.4 |     4703.1 |      55.1 |      30.4 |      25   |
| [qgis310-nginx > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201101-092121/qgis310-nginx/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f.txt |                 17.4 | +4.8%                        |           98.5 | +6.2%                  |          4383.5 | +3.5%                   |            22 |            0 |          0 |      4479     |         3551 |         6098 |        5859.5 |       6085.4  |          6098 |      1.89361 |                246.913 |           0.806938 |     5250.8 |     4811.7 |     4625.6 |      48.6 |      31.1 |      24.4 |
| [qgis310-nginx > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201101-092121/qgis310-nginx/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 14.6 | +0.0%                        |           68.1 | +0.6%                  |          3367.5 | +0.0%                   |            20 |            0 |          0 |      3405.95  |         2018 |         4527 |        4301.8 |       4515.85 |          4527 |      2.2424  |                697.722 |           0.939007 |     5034.4 |     4801.8 |     4712.3 |      51.2 |      31.5 |      24.9 |
| [qgis310-caddy > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201101-092121/qgis310-caddy/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw.txt    |                 15.7 | +7.5%                        |           67.7 | +0.0%                  |          3417.5 | +1.5%                   |            20 |            0 |          0 |      3386.1   |         2098 |         5003 |        4539.4 |       4981    |          5003 |      2.00521 |                623.901 |           0.839683 |     4977.7 |     4813.8 |     4727.8 |      46.9 |      29.1 |      12.8 |
| [qgis310-apache > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201101-092121/qgis310-apache/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 16.1 | +10.3%                       |           70.3 | +3.8%                  |          3612.5 | +7.3%                   |            20 |            0 |          0 |      3515.2   |         1965 |         5441 |        4833.9 |       5413.15 |          5441 |      1.91773 |                596.757 |           0.803049 |     4851.2 |     4791.6 |     4720.9 |      55.4 |      27.9 |      13   |
| [qgis310-nginx > somap310_lk > lk.txt](../results/details/compare-webserver/20201101-092121/qgis310-nginx/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  8   | +0.0%                        |           15.1 | +0.0%                  |           488   | +0.0%                   |            30 |            0 |          0 |       503.233 |          253 |          934 |         817.5 |        921.35 |           934 |     14.5278  |                393.804 |           5.92653  |     4655.6 |     4617.8 |     4557.1 |      36.1 |      32.6 |      27.5 |
| [qgis310-apache > somap310_lk > lk.txt](../results/details/compare-webserver/20201101-092121/qgis310-apache/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  8.2 | +2.5%                        |           16.3 | +7.8%                  |           545   | +11.7%                  |            30 |            0 |          0 |       542.733 |          100 |         1070 |         967.9 |       1017.75 |          1070 |     12.7443  |                345.847 |           5.19893  |     4676.1 |     4653.4 |     4613.7 |      39.1 |      32.7 |      23.2 |
| [qgis310-caddy > somap310_lk > lk.txt](../results/details/compare-webserver/20201101-092121/qgis310-caddy/somap310_lk/lk.txt/dashboard/index.html)                                       | somap_lk > lk.txt                   |                  8.2 | +2.5%                        |           18.6 | +23.0%                 |           531.5 | +8.9%                   |            30 |            0 |          0 |       619.067 |          476 |         1004 |         948.3 |        975.95 |          1004 |     12.4844  |                338.303 |           5.09292  |     4666.7 |     4657.2 |     4647.7 |      38.9 |      34.1 |      29.3 |

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

  qgis310-standalone:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

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
  qgis310-standalone:
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
    path-prefix: ''
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```