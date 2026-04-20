FROM klakegg/hugo:busybox

WORKDIR /src

EXPOSE 1313

CMD ["server", "-D", "--bind", "0.0.0.0"]

# Note: klakegg/hugo may lag behind latest Hugo release.
# For latest, use: docker run -it --rm -v $(pwd):/src ghcr.io/gohugoio/hugo:latest