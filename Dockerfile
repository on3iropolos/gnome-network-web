FROM klakegg/hugo:ext-debian

WORKDIR /src

EXPOSE 1313

CMD ["server", "-D", "--bind", "0.0.0.0"]