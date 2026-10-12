export interface QuoteData {
  id: string;
  number: string;
  text: string;
  image: string;
  /** portrait = ảnh chân dung Elon Musk; scene = ảnh bối cảnh/sản phẩm (không người rõ mặt) */
  kind: "portrait" | "scene";
}

// 18 ảnh điện ảnh màu riêng biệt — đồng bộ vàng hổ phách + ngọc bích trên nền đen
// portrait = Elon Musk · scene = bối cảnh/sản phẩm không có người rõ mặt
const Q01 =
  "https://vibe.filesafe.space/1791701220283744072/assets/fc1472fc-3124-4b00-bab6-38028f01fbc6.png"; // bãi phóng đêm, khói lửa — scene
const Q02 =
  "https://vibe.filesafe.space/1791701220283744072/assets/e4420c31-c93b-4e70-871f-9d44a9d52e8b.png"; // Elon trầm tư vực thẳm — portrait
const Q03 =
  "https://vibe.filesafe.space/1791701220283744072/assets/e2e61ea4-6220-4087-ab60-2a7a00c1c791.png"; // Elon lạc quan → nỗi đau — portrait
const Q04 =
  "https://vibe.filesafe.space/1791701220283744072/assets/fada7a9c-dccd-41a5-9c8a-de92c1db4d6c.png"; // Elon nhìn xác suất <10% — portrait
const Q05 =
  "https://vibe.filesafe.space/1791701220283744072/assets/28c15728-dc94-4865-a94f-73e8fcac4fcf.png"; // Elon ấm áp, đời ngắn — portrait
const Q06 =
  "https://vibe.filesafe.space/1791701220283744072/assets/12a20d92-a32e-44eb-9b5e-245125405b8c.png"; // 50h vs 100h, split desk — scene
const Q07 =
  "https://vibe.filesafe.space/1791701220283744072/assets/c444758f-83c9-4c9b-b7d6-80d0a9f9e46c.png"; // tên lửa + phương trình vật lý — scene
const Q08 =
  "https://vibe.filesafe.space/1791701220283744072/assets/41921415-b8d4-4eea-8172-ad64be36a7fc.png"; // Elon + nguyên liệu thô, cây đũa thần — portrait
const Q09 =
  "https://vibe.filesafe.space/1791701220283744072/assets/901f5b7d-3ff4-464a-a159-b36cd014ba65.png"; // Elon + lắp ráp nguyên tử, động cơ — portrait
const Q10 =
  "https://vibe.filesafe.space/1791701220283744072/assets/586fdb57-a76b-4f46-82da-262851f6fa96.png"; // Elon loại bỏ linh kiện — portrait
const Q11 =
  "https://vibe.filesafe.space/1791701220283744072/assets/9a1a32c5-0bf8-4972-a99d-02d00742e065.png"; // Elon tăng tốc, motion blur — portrait
const Q12 =
  "https://vibe.filesafe.space/1791701220283744072/assets/8c94caec-53f6-440d-812c-7ea2964439d7.png"; // Elon + đội ngũ SpaceX — portrait
const Q13 =
  "https://vibe.filesafe.space/1791701220283744072/assets/978f8c49-1126-4974-8a39-0ab0e4d60c87.png"; // Elon vật lộn với vấn đề — portrait
const Q14 =
  "https://vibe.filesafe.space/1791701220283744072/assets/ceec4566-248c-4122-b60a-25f304768776.png"; // Elon tài năng vs tính cách — portrait
const Q15 =
  "https://vibe.filesafe.space/1791701220283744072/assets/51c04bf2-0612-46e0-9255-2e7e647ac2a3.png"; // Elon trái tim tốt — portrait
const Q16 =
  "https://vibe.filesafe.space/1791701220283744072/assets/cd59beb7-b3a7-443f-9fef-3d3b698a0b59.png"; // Trái Đất từ không gian — scene
const Q17 =
  "https://vibe.filesafe.space/1791701220283744072/assets/f10c8608-7826-4253-af39-f0468d1c4e11.png"; // Elon đặt câu hỏi đúng — portrait
const Q18 =
  "https://vibe.filesafe.space/1791701220283744072/assets/9097e3f3-fd2c-4d2c-99b8-5dcd9ed27c3f.png"; // chiếc bánh mở rộng — scene

export const QUOTES: QuoteData[] = [
  {
    id: "q01",
    number: "01",
    text: "Khi bạn đã đổ máu, mồ hôi, nước mắt để gây dựng một thứ - nó giống như đứa con tinh thần của bạn vậy. Bạn sẽ không nỡ để một đứa bị chết vì đói.",
    image: Q01,
    kind: "scene",
  },
  {
    id: "q02",
    number: "02",
    text: "Khởi nghiệp một công ty giống như nhai thủy tinh và nhìn chằm chằm vào vực thẳm.",
    image: Q02,
    kind: "portrait",
  },
  {
    id: "q03",
    number: "03",
    text: "Khi bạn mới bắt đầu mở công ty, bạn rất lạc quan, mọi thứ trông thật tuyệt vời. Nhưng rồi bạn gặp vô số vấn đề, mức độ hạnh phúc giảm dần đều. Sau đó bạn sẽ trải qua cả một thế giới của nỗi đau.",
    image: Q03,
    kind: "portrait",
  },
  {
    id: "q04",
    number: "04",
    text: "Ngay từ đầu tôi đã đánh giá cả SpaceX và Tesla chỉ có dưới 10% khả năng thành công.",
    image: Q04,
    kind: "portrait",
  },
  {
    id: "q05",
    number: "05",
    text: "Nếu bạn không thích nó, thì cuộc đời quá ngắn ngủi để lựa chọn nó.",
    image: Q05,
    kind: "portrait",
  },
  {
    id: "q06",
    number: "06",
    text: "Nếu ai đó làm việc 50 giờ một tuần và bạn làm 100 giờ, bạn sẽ hoàn thành gấp đôi trong một năm so với họ.",
    image: Q06,
    kind: "scene",
  },
  {
    id: "q07",
    number: "07",
    text: "Vật lý là luật - còn những thứ khác chỉ là gợi ý. Tôi từng gặp nhiều người có thể phá các luật lệ, nhưng chưa gặp ai phá được các quy luật vật lý.",
    image: Q07,
    kind: "scene",
  },
  {
    id: "q08",
    number: "08",
    text: "Tôi gọi đây là 'con số cây đũa thần': nếu bạn có một đống nguyên liệu thô và một cây đũa thần có thể sắp xếp các nguyên tử thành đúng hình dạng bạn muốn - đó là chi phí thấp nhất bạn có thể đạt được. Và con số đó thường rất thấp.",
    image: Q08,
    kind: "portrait",
  },
  {
    id: "q09",
    number: "09",
    text: "Điều thực sự khiến sản phẩm đắt không phải là nguyên liệu, mà là cách bạn sắp xếp các nguyên tử thành hình dạng mong muốn.",
    image: Q09,
    kind: "portrait",
  },
  {
    id: "q10",
    number: "10",
    text: "Nếu bạn không bị buộc phải thêm lại ít nhất 10% những gì bạn đã loại bỏ - tức là bạn chưa loại bỏ đủ nhiều.",
    image: Q10,
    kind: "portrait",
  },
  {
    id: "q11",
    number: "11",
    text: "Bạn không nên tăng tốc trước khi thử loại bỏ và tối ưu hóa. Nếu không - bạn đang làm nhanh hơn một thứ không đáng tồn tại.",
    image: Q11,
    kind: "portrait",
  },
  {
    id: "q12",
    number: "12",
    text: "Toàn bộ một công ty chỉ là một nhóm người tập hợp lại với nhau để tạo ra một sản phẩm hoặc dịch vụ. Tùy thuộc vào việc nhóm đó tài năng và chăm chỉ đến đâu - điều đó sẽ quyết định sự thành công của công ty.",
    image: Q12,
    kind: "portrait",
  },
  {
    id: "q13",
    number: "13",
    text: "Người nào đã phải vật lộn với một vấn đề thì họ thật sự hiểu rõ vấn đề đó. Họ sẽ không quên. Bạn có thể hỏi họ những câu rất chi tiết và họ sẽ biết câu trả lời.",
    image: Q13,
    kind: "portrait",
  },
  {
    id: "q14",
    number: "14",
    text: "Sai lầm lớn nhất mà tôi từng mắc phải là đặt quá nhiều trọng số vào tài năng của ai đó mà không đủ vào tính cách của họ.",
    image: Q14,
    kind: "portrait",
  },
  {
    id: "q15",
    number: "15",
    text: "Điều thực sự quan trọng là liệu ai đó có một trái tim tốt hay không. Thật sự đấy.",
    image: Q15,
    kind: "portrait",
  },
  {
    id: "q16",
    number: "16",
    text: "Hãy đóng góp nhiều hơn mức bạn tiêu thụ. Hãy làm nhiều hơn những gì bạn nhận.",
    image: Q16,
    kind: "scene",
  },
  {
    id: "q17",
    number: "17",
    text: "Câu hỏi mới là phần khó - và nếu bạn đặt câu hỏi đúng, thì câu trả lời tương đối dễ hiểu. Cuối cùng, phần quan trọng nhất sẽ là đặt câu hỏi đúng.",
    image: Q17,
    kind: "portrait",
  },
  {
    id: "q18",
    number: "18",
    text: "Đối với người có tư duy tổng bằng 0, cách duy nhất để tiến lên là phải lấy bớt từ người khác. Nhưng điều đó là sai - rõ ràng chiếc bánh luôn gia tăng kích thước. Bạn thực sự có thể có rất nhiều bánh. Chiếc bánh không hề cố định.",
    image: Q18,
    kind: "scene",
  },
];
