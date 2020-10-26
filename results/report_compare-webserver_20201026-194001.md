# QGIS Benchmark summary compare-webserver (20201026-194001)


compare different settings on version of 3.10

_run completed in 00h 01m 20s_
## Summary plot
An interactive summary plot can be found [here](report_compare-webserver_20201026-194001_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-nginx | Global  |        178   |               0   |            72 |            0 |     2489.5 |     2000.5 |     1844.9 |      57.1 |   25.9333 |       1.7 |          0 |
| qgis310-caddy | Global  |        182.8 |               2.7 |            72 |            0 |     2397.1 |     1999.9 |     1869.2 |      54.6 |   24.3    |       9.4 |          0 |

## Aggregated
| name                                        | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-caddy > somap310_grundplanav_farbig | somap_grundplanav_farbig |         93.7 |               0   |            22 |            0 |     2397.1 |     2058.3 |     1927   |      45   |      29.5 |      24.8 |          0 |
| qgis310-nginx > somap310_grundplanav_farbig | somap_grundplanav_farbig |         95.3 |               1.7 |            22 |            0 |     2489.5 |     2128.1 |     1937.9 |      57.1 |      30.1 |      24.8 |          0 |
| qgis310-nginx > somap310_grundplanav_sw     | somap_grundplanav_sw     |         67.4 |               0   |            20 |            0 |     2153.1 |     1989.6 |     1878.4 |      45   |      30.1 |      20   |          0 |
| qgis310-caddy > somap310_grundplanav_sw     | somap_grundplanav_sw     |         70.8 |               5   |            20 |            0 |     2213.2 |     2053.1 |     1933.1 |      54.6 |      24.2 |      12.5 |          0 |
| qgis310-nginx > somap310_lk                 | somap_lk                 |         15.3 |               0   |            30 |            0 |     1922.7 |     1883.8 |     1844.9 |      33.5 |      17.6 |       1.7 |          0 |
| qgis310-caddy > somap310_lk                 | somap_lk                 |         18.2 |              19.4 |            30 |            0 |     1907.4 |     1888.3 |     1869.2 |      29.1 |      19.2 |       9.4 |          0 |

## Detail
| name                                                                                                                                                                                   | group                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-caddy > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201026-194001/qgis310-caddy/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |         93.7 |               0   |            22 |            0 |          0 |      4259.68  |          4315.5 |         3008 |         5778 |        5387.9 |       5734.65 |          5778 |      1.98431 |                258.721 |           0.845585 |     2397.1 |     2058.3 |     1927   |      45   |      29.5 |      24.8 |
| [qgis310-nginx > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-webserver/20201026-194001/qgis310-nginx/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |         95.3 |               1.7 |            22 |            0 |          0 |      4332.77  |          4273   |         3299 |         5979 |        5645.2 |       5945.85 |          5979 |      1.96131 |                255.74  |           0.835785 |     2489.5 |     2128.1 |     1937.9 |      57.1 |      30.1 |      24.8 |
| [qgis310-nginx > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201026-194001/qgis310-nginx/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |         67.4 |               0   |            20 |            0 |          0 |      3372.1   |          3356.5 |         2023 |         4495 |        4233.3 |       4482.05 |          4495 |      2.25606 |                701.969 |           0.944726 |     2153.1 |     1989.6 |     1878.4 |      45   |      30.1 |      20   |
| [qgis310-caddy > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-webserver/20201026-194001/qgis310-caddy/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |         70.8 |               5   |            20 |            0 |          0 |      3542.05  |          3383.5 |          900 |         6761 |        6192.2 |       6736.85 |          6761 |      1.77762 |                553.086 |           0.744378 |     2213.2 |     2053.1 |     1933.1 |      54.6 |      24.2 |      12.5 |
| [qgis310-nginx > somap310_lk > lk.txt](../results/details/compare-webserver/20201026-194001/qgis310-nginx/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         15.3 |               0   |            30 |            0 |          0 |       508.7   |           492.5 |          223 |          935 |         803.5 |        911.9  |           935 |     14.556   |                394.568 |           5.93803  |     1922.7 |     1883.8 |     1844.9 |      33.5 |      17.6 |       1.7 |
| [qgis310-caddy > somap310_lk > lk.txt](../results/details/compare-webserver/20201026-194001/qgis310-caddy/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         18.2 |              19.4 |            30 |            0 |          0 |       607.467 |           513.5 |          455 |         1028 |         921.4 |        981.8  |          1028 |     12.5892  |                341.142 |           5.13566  |     1907.4 |     1888.3 |     1869.2 |      29.1 |      19.2 |       9.4 |

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
description: 'compare different settings on version of 3.10'

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
    active: no
    inherit: qgis310-nginx
    template: docker-compose-qgis-3-apache


  qgis310-caddy:
    active: yes
    inherit: qgis310-nginx
    template: docker-compose-proxy-qgis-3-caddy

```
### parsed test configurations

```
description: compare different settings on version of 3.10
test-cases:
  qgis310-apache:
    active: false
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
    template: docker-compose-qgis-3-apache
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