#!/bin/bash
# set -x  changing to debug mode
echo "Please enter the file name:"
read filename

files=$(find . -name "$filename")

echo "Do you want to overwrite or append to the files? (o/a)"
read mode

echo "Please enter the input string:"
read input

echo "Do you want to apply this to all directories or specific directories? (a/s)"
read apply

if [ "$apply" == "s" ]; then
    echo "Please enter the specific directories, separated by spaces:"
    read dirs
    IFS=' ' read -ra dir_array <<< "$dirs"
    for dir in "${dir_array[@]}"; do
        if [[ $dir == "./"* ]]; then
            dir_array=("${dir_array[@]/$dir/$(pwd)$dir}")
        elif [[ $dir == "../"* ]]; then
            dir_array=("${dir_array[@]/$dir/$(dirname $(pwd))/$dir}")
        fi
    done
    files=$(echo "$files" | grep -E "$(printf "%s|" "${dir_array[@]}" | sed 's/.$//')")
fi

echo "Do you want to write an article or just send the input text? (a/t)"
read write_mode

if [ "$write_mode" == "a" ]; then
    echo "Do you want to include a title? (y/n)"
    read title_choice
    if [ "$title_choice" == "y" ]; then
        echo "Please enter the title:"
        read title
    fi

    article=""

    while true; do
        echo "What type of content do you want to add? (text/subtitle/photo/link/code/stop)"
        read content_type

        if [ "$content_type" == "stop" ]; then
            break
        fi

        echo "Please enter the content:"
        read content

        case $content_type in
            text)
                article+="$content\n\n"
                ;;
            subtitle)
                article+="## $content\n\n"
                ;;
            photo)
                article+="![]($content)\n\n"
                ;;
            link)
                article+="[$content]($content)\n\n"
                ;;
            code)
                article+="\`\`\`\n$content\n\`\`\`\n\n"
                ;;
        esac
    done

    input=$article
fi

for file in $files; do
    if [ ! -f "$file" ]; then
        dir=$(dirname "$file")
        mkdir -p "$dir"
        touch "$file"
    fi

    if [ ! -z "$title" ]; then
        input="# $title\n\n$input"
    fi

    if [ "$mode" == "o" ]; then
        dir=$(basename "$(dirname "$file")" | tr '[:lower:]' '[:upper:]')
        echo "$dir $input" > "$file"
    elif [ "$mode" == "a" ]; then
        echo -e "\n$input" >> "$file"
    fi

    echo "Successfully wrote to $file"
done

echo "Done!"


# issue, when it si for asking file and asking the location of the specific dir , it is not working , will change it later